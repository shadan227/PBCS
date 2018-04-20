from sys import argv
from CalcSpecScore import calcSpecScore
import json

keys = argv[1:]
while "" in keys:
    keys.remove("")
product_scores = {}
sum_scores = {}
sums = []
#print("For keys: ",keys)
def main_comparator(keys):
    for key in keys:
#        print('\n\nkey: '+key)
        #print(calcSpecScore(key))
        product_scores[key] = round(calcSpecScore(key),3)
        

main_comparator(keys)
#print(" ".join([str(i) for i in product_scores.values()]))
json_string = json.dumps(product_scores)
print(json_string)
#print(product_scores)


#ARG USAGE: keys separated by single space on command line
