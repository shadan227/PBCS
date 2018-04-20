from sys import argv
from CalcPrioritisedSpecScore import *
import json
from decimal import Decimal

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
Attributes = client['Attributes']
products = db['products']

parameters = argv[1:]
prioritised_score = {}
attribute_list = []
products_ids = []

while "" in products_ids:
    products_ids.remove("")

def prioritise(products_ids, attribute_list):
    sum_scores = {}
    for key in products_ids:
   #     print("key: "+key)
        prioritised_score[key] = round(calcPrioritisedSpecScore(key, attribute_list),3)

for key in parameters:
    if products.find_one({'key':key}) != None:
        products_ids.append(key)
else:
    start = len(products_ids)
    attribute_list.extend(parameters[start:])

#print("products_ids: "+str(products_ids))
#print("attribute_list: "+str(attribute_list))
prioritise(products_ids, attribute_list)
#print(" ".join([str(i) for i in prioritised_score.values()]))
json_string = json.dumps(prioritised_score)
print(json_string)

#USAGE: keys followed by attributes separated by single space
