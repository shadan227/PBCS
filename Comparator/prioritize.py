from sys import argv
from CalcSpecScore import *

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']

parameters = argv[1:]
prioritised_score = {}
attributes = []

for key in parameters:
    if products.find_one({'key':key}) != None:
        prioritised_score[key] = calcSpecScore(key)
else:
    attributes.extend(parameters[len(prioritised_score)+1:])

'''
Boost the score and return it to command line
'''

#DUMMY PRINTS
for key in prioritised_score:
    print("key: ",key)
    print(prioritised_score[key])
    print('-'*192)
    print()
print('*'*192)
print(attributes)


#USAGE: keys followed by attributes separated by single space
