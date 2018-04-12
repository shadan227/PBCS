from sys import argv
from CalcPrioritisedSpecScore import *

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
Attributes = client['Attributes']
products = db['products']

def prioritise(products_ids, attribute_list):
    sum_scores = {}
    for key in products_ids:
        prioritised_score[key] = calcPrioritisedSpecScore(key, attribute_list)
    print('*************PRIORITISED PRODUCT SCORES***********\n',prioritised_score)                  #Uncomment for debugging
    for key, value in prioritised_score.items():
        sum = 0
        print('\n\n*******************'+key+'********************')
        for a, v in value.items():
            sum += v
            print(a+':'+str(v))
        sum_scores[key] = sum
        print("\nPrioritised Sum Score >>"+str(sum))
    return sum_scores



parameters = argv[1:]
prioritised_score = {}
attribute_list = []
products_ids = []

for key in parameters:
    if products.find_one({'key':key}) != None:
        products_ids.append(key)
else:
    start = len(products_ids)
    attribute_list.extend(parameters[start:])

prioritise(products_ids, attribute_list)

#USAGE: keys followed by attributes separated by single space
