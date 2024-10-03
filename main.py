## Default Python Packages
import asyncio
import re
from string import punctuation
import math

## API Frameworks
from fastapi import FastAPI, Request
from pydantic import BaseModel
print("Hi")
## Audio Processing Libraries
import pyaudio as pa
import torch
import speech_recognition as sr
import numpy as np

## NLP Libraries
from nltk.tokenize import sent_tokenize, word_tokenize
from tensorflow import keras

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

# Returns a list defining frequency of each word in the list
#def bag_of_words():
    
def ngrams(sentence, n):
    ngrams = zip(*[clean_speech(sentence).split()[i:] for i in range(n)])
    return [''.join(ngram ) for ngram in ngrams]

def cos_sims(i, j):
    return np.dot(i, j) / np.sqrt(np.dot(i, i) * np.dot(j, j))


print(ngrams("Hello world, my name is Peter",2))

#class SoundFile(BaseModel):
 #   name: str
  #  sound_bite # type: ignore
    
#app = FastAPI()

#@app.post("/SoundFile/")
#async def create_sb():
 #   return None