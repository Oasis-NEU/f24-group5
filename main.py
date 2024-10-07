## Default Python Packages
import asyncio
import re
from string import punctuation
import math

## API Frameworks
from fastapi import FastAPI, Request
from pydantic import BaseModel

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

## Pairwise matching for each part of the string
def ngrams(sentence, n = 2):
    token = clean_speech(sentence)
    list_ngrams = []
    for i in range(len(token) - 1):
        list_ngrams.append(token[int(i): int(i + n)])
    return list_ngrams
    
def cos_sims(i, j):
    return np.dot(i, j) / np.sqrt(np.dot(i, i) * np.dot(j, j))

sample_text = ["Hello world, my name is Peter", "Hllo wrld, my name is Peter"]

class tf_idf:
    def __init__(self, doc1, doc2):
        self.doc1 = [word.lower() for word in word_tokenize(doc1) if word.isalpha()]
        self.doc2 = [word.lower() for word in word_tokenize(doc2) if word.isalpha()]
        self.sentence = [self.doc1] + [self.doc2]
        self.samp_text = self.doc1 + self.doc2
        self.word_set = []
        self.word_index = {}
        self.word_occ = {}
        
    # creates a corpus for each word in all docs
    def create_corpus(self):
        for word in self.samp_text:
            if word not in self.word_set:
                self.word_set.append(word)
        
        for i, word in enumerate(self.word_set):
            self.word_index[word] = i
                
    # finds number of docs word n appears in
    def num_docs(self):
        
        for i in self.word_set:
            self.word_occ[i] = 0
        for i in self.sentence:
            for x in i:
                self.word_occ[x] += 1
        print(self.word_occ)
                
    # finds freq of word in one doc
    def term_freq(self, doc, word): 
        n = len(doc)
        x = 0
        for i in doc:
            if word == i:
                x += 1
        return x / n
    
    # calculates the inverse document frequency (number of docs / word occ through all)
    def calc_idf(self, word):
        try:
            x = self.word_occ[word]
        except:
            x = 0
        return np.log(2 / 1 + x)
    
    # generates a tf-idf matrix per word
    def tf_idff(self, sent):
        vec = np.zeros((len(self.word_set), ))        
        for word in sent:
            tf = self.term_freq(sent, word)
            idf = self.calc_idf(word)
            vec[self.word_index[word]] = tf * idf
        return vec
    
    def final_calc(self):
        self.create_corpus()
        self.num_docs()
        vectors = []
        for i in self.sentence:
            vectors.append(self.tf_idff(i))
        return vectors
    
    
            
        
x = tf_idf(sample_text[0], sample_text[1])            
y = x.final_calc()
#print(y[0])
#print(y[1])      

#class SoundFile(BaseModel):
 #   name: str
  #  sound_bite # type: ignore
#app = FastAPI()

#@app.post("/SoundFile/")
#async def create_sb():
 #   return None