## Default Python Packages
import asyncio
import re
from string import punctuation
import math
import numpy as np
import pandas as pd

## API Frameworks
from fastapi import FastAPI, Request, UploadFile, File
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os

## Audio Processing Libraries
import pyaudio as pa
import torch
import speech_recognition as sr

## NLP Libraries
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import *
# from tensorflow import keras
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# from sklearn.pipeline import Pipeline

# from os import path
# audio_file= path.join(path.dirname(path.realpath(__file__)), "tests_english.wav")

# I'm commenting this function out because I was told to so don't blame me - Thomas


# def speech_to_text_alpha1():
#    r = sr.Recognizer()
#    with sr.Microphone() as source:
#        r.adjust_for_ambient_noise(source)    
#        print("Speak something...")
#        audio_data = r.listen(source)
#        try: 
#            text = r.recognize_whisper(audio_data)
#            print(text)
#        except sr.UnknownValueError:
#            print("Failed to transcribe")
#        except sr.RequestError as e:
#            print(f"Could not request results from service: {e}")
#        return text


def speech_to_text_final(audio_file):
    r = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio = r.record(source)  # read the entire audio file
        try:
            text = r.recognize_whisper(audio)
            print(text)
        except sr.UnknownValueError:
            print("Failed to transcribe")
        except sr.RequestError as e:
            print(f"Could not request results from service: {e}")
        return text


# k = speech_to_text_alpha1()


def clean_speech(string):
    proc_token = string.lower()
    proc_token = re.sub(f"[{re.escape(punctuation)}]", "", proc_token)
    return proc_token


## Pairwise matching for each part of the string
## generating n-grams from the input sentence
def ngrams(sentence, n=2):
    token = clean_speech(sentence)
    list_ngrams = []
    for i in range(len(token) - 1):
        list_ngrams.append(token[int(i): int(i + n)])
    return list_ngrams


# str1 = "A plain text editor that allows you to keep notes throughout the day, create a list, write or edit code without worrying about unwanted auto formatting."
# str2 = "Save your text file in Google Drive as a Doc rather than a TXT file. This allows you to save important files that are editable, rather than auto saving every file."


# sentences = sent_tokenize(str1) # NLTK function
# total_documents = len(sentences)

# create a list with the transcribed audio and the cleaned speech
# thank you peter
def make_list(trans_audio, clen_speech):
    return [trans_audio, clean_speech(clen_speech)]


class Similarity:
    def __init__(self, sample_text):
        tf_idf_matrix = []
        cos_similarity = []
        self.sample_text = sample_text

    def tf_idf(self):
        vectorizer = TfidfVectorizer()
        self.tf_idf_matrix = vectorizer.fit_transform(self.sample_text)

    def cosine_similarity_matrix(self):
        self.tf_idf()
        self.cos_similarity = cosine_similarity(self.tf_idf_matrix[0:1], self.tf_idf_matrix)
        return self.cos_similarity

# TO RUN THE BACKEND
# copy paste this comamnd into terminal to run "uvicorn main:app"

app = FastAPI()
origins = [
    "http://localhost:3000",  # React app's development URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/sound_file")
# endpoint of this FastAPI thing idk I'm trying guys
async def process_audio(given: str, sound_bite: UploadFile = File(...)):
    if not sound_bite.filename.endswith(".wav"):
        print("error - invalid file type; must be a .wav")

    temp_file = f"temp_{sound_bite.filename}"
    with open(temp_file, "wb") as f:
        f.write(await sound_bite.read())

    transcript = speech_to_text_final(temp_file)

    # I imported os to maybe clean up the temporary file idk I found
    # this off google
    os.remove(temp_file)

    cleaned_speech_trans = clean_speech(transcript)
    cleaned_speech_give = clean_speech(given)
    grams = ngrams(cleaned_speech_trans, n=2)

    # getting ready for Similarity to have its input
    similarity_input = make_list(cleaned_speech_trans, cleaned_speech_give)
    simil = Similarity(similarity_input)
    simil_matrix = simil.cosine_similarity_matrix()

    return {
        round(simil_matrix[0][1], 5)
    }

