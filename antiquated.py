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
                if self.word_occ[x] < 2:
                    self.word_occ[x] += 1
                                    
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
            x = 1
        return np.log10(2 / x)
    
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
        print(self.sentence)
        #vectors = pd.DataFrame(vectors, columns = self.word_set)
        return vectors
    
def cos_sims(vec1, vec2):
    
    numerator = np.dot(vec1, vec2)
    return numerator