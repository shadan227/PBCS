from sys import argv
from CalcPrioritisedSpecScore import *
import json
from tabulate import tabulate
import itertools
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
Attributes = client['Attributes']
products = db['products']

parameters = argv[1:]
prioritised_score = {}
attribute_list = []
products_ids = []
table = [[],[],[],[]]

while "" in products_ids:
    products_ids.remove("")

def prioritise(products_ids, attribute_list):
    i = 0
    for key in products_ids:
        table[i] = calcPrioritisedSpecScore(key, attribute_list)[1]
        prioritised_score[key] = round(sum(calcPrioritisedSpecScore(key, attribute_list)[0].values()),3)
        i+=1

for key in parameters:
    if products.find_one({'key':key}) != None:
        products_ids.append(key)
else:
    start = len(products_ids)
    attribute_list.extend(parameters[start:])

print("products_ids: "+str(products_ids))
print("attribute_list: "+str(attribute_list))
prioritise(products_ids, attribute_list)
json_string = json.dumps(prioritised_score)
#print(json_string)
table = list(itertools.zip_longest(table[0], table[1], table[2], table[3], fillvalue='-'))
print(tabulate(table,tablefmt='orgtbl'))

#USAGE: keys followed by attributes separated by single space
