## Default Python Packages
import asyncio
import re
from string import punctuation
import math
import numpy as np
import pandas as pd

## API Frameworks
from fastapi import FastAPI, Request
from pydantic import BaseModel

## Audio Processing Libraries
import pyaudio as pa
import torch
import speech_recognition as sr


## NLP Libraries
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import *
from tensorflow import keras
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
#from sklearn.pipeline import Pipeline

#from os import path
#audio_file= path.join(path.dirname(path.realpath(__file__)), "tests_english.wav")
def speech_to_text_alpha1():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)    
        print("Speak something...")
        audio_data = r.listen(source)
        try: 
            text = r.recognize_whisper(audio_data)
            print(text)
        except sr.UnknownValueError:
            print("Failed to transcribe")
        except sr.RequestError as e:
            print(f"Could not request results from service: {e}")
        return text


#def speech_to_text_final(audio_file):
 #   with sr.AudioFile(audio_file) as source:
  #      audio = r.record(source)  # read the entire audio file
    #    try: 
   #         text = r.recognize_whisper(audio)
     #       print(text)
      #  except sr.UnknownValueError:
       #     print("Failed to transcribe")
        #except sr.RequestError as e:
         #   print(f"Could not request results from service: {e}")

#k = speech_to_text_alpha1()


def clean_speech(string):
    proc_token = string.lower()
    proc_token = re.sub(f"[{re.escape(punctuation)}]", "", proc_token)
    return proc_token

## Pairwise matching for each part of the string
def ngrams(sentence, n = 2):
    token = clean_speech(sentence)
    list_ngrams = []
    for i in range(len(token) - 1):
        list_ngrams.append(token[int(i): int(i + n)])
    return list_ngrams

# str1 = "A plain text editor that allows you to keep notes throughout the day, create a list, write or edit code without worrying about unwanted auto formatting."
# str2 = "Save your text file in Google Drive as a Doc rather than a TXT file. This allows you to save important files that are editable, rather than auto saving every file."


sample_text = ["Hello world. My name is Peter", 
               "hello, word. My name is Peter"]
    
# sentences = sent_tokenize(str1) # NLTK function
# total_documents = len(sentences)
class Similarity:
    def __init__(self, sample_txt):
        tf_idf_matrix = []
        cos_similarity = []
    def tf_idf(self):    
        vectorizer = TfidfVectorizer()
        self.tf_idf_matrix = vectorizer.fit_transform(sample_text)
    def cosine_similarity_matrix(self):
        self.tf_idf()
        self.cos_similarity = cosine_similarity(self.tf_idf_matrix[0:1], self.tf_idf_matrix)
        return self.cos_similarity


x = Similarity(sample_text).cosine_similarity_matrix()
print(x[0][1])

#class SoundFile(BaseModel):
 #   name: str
  #  sound_bite # type: ignore
#app = FastAPI()

#@app.post("/SoundFile/")
#async def create_sb():
 #   return None