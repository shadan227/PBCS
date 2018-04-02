from sys import argv
from CalcSpecScore import CalcSpecScore
keys = argv[1:]
product_scores = {}
def main_comparator(keys):
    for key in keys:
        product_scores[key] = CalcSpecScore(key)
#    print(product_scores)                  #Uncomment for debugging    
    return product_scores

main_comparator(keys)
