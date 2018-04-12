from sys import argv
from CalcSpecScore import calcSpecScore
keys = argv[1:]
product_scores = {}
sum_scores = {}
def main_comparator(keys):
    for key in keys:
        product_scores[key] = calcSpecScore(key)
    print('*************PRODUCT SCORES***********\n',product_scores)                  #Uncomment for debugging
    for key, value in product_scores.items():
        sum = 0
        print('\n\n*******************'+key+'********************')
        for a, v in value.items():
            sum += v
            print(a+':'+str(v))
        sum_scores[key] = sum
        print("\nSum Score >>"+str(sum))
    return sum_scores

main_comparator(keys)

#ARG USAGE: keys separated by single space on command line
