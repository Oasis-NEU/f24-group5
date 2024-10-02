## API Frameworks
from fastapi import FastAPI, Request
from pydantic import BaseModel
import asyncio
print("HI")
## Audio Processing Libraries
import pyaudio as pa
import torch
import speech_recognition as sr
import numpy as np

## NLP Libraries
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

def speech_to_text_final(audio_file):
    with sr.AudioFile(audio_file) as source:
        audio = r.record(source)  # read the entire audio file
        try: 
            text = r.recognize_whisper(audio)
            print(text)
        except sr.UnknownValueError:
            print("Failed to transcribe")
        except sr.RequestError as e:
            print(f"Could not request results from service: {e}")





#class SoundFile(BaseModel):
 #   name: str
  #  sound_bite # type: ignore
    
#app = FastAPI()

#@app.post("/SoundFile/")
#async def create_sb():
 #   return None