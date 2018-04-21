from sys import argv
from CalcSpecScore import calcSpecScore
import json
import itertools
from tabulate import tabulate

keys = argv[1:]
while "" in keys:
    keys.remove("")
product_scores = {}
sum_scores = {}
sums = []
table = [[],[],[],[]]

#print("For keys: ",keys)
def main_comparator(keys):
    i = 0
    for key in keys:
        table[i] = calcSpecScore(key)[1]
        product_scores[key] = round(sum(calcSpecScore(key)[0].values()),3)
        i+=1


main_comparator(keys)
json_string = json.dumps(product_scores)
#print(json_string)
#print(product_scores)
table = list(itertools.zip_longest(table[0], table[1], table[2], table[3], fillvalue='-'))
print(tabulate(table,tablefmt='orgtbl'))

#ARG USAGE: keys separated by single space on command line
