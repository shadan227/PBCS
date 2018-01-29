from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']
import pprint
url_dict = {}
import link_crawler
url_dict.update(link_crawler.run())
import product_crawler
product_dict = {}
count = 0

product_list = []
def insert_into_db(product_dict):
    if product_dict == {}:
        print('EMPTY PRODUCT DICTIONARY RECEIVED\nTERMINATING')
    else:
        for key, product in product_dict.items():
            product.update({'key':key})
            print('Inserting: '+product['name'])
            product_list.append(product)
    #        product = json.dumps(product, indent = 4)
            
    #        products.insert_one(product)
        products.insert_many(product_list)

for key, link in url_dict.items():
    if products.find_one({'key':key}) != None: continue            #check if product exists in database
    count+=1
    print(count)
    try:
        product = product_crawler.run(link)
        product_dict[key] = product
    except:
        print("Failed at: ", link)
#        input('Hit Enter to Continue')

###################Printing to External File####################
#converting this data into json
'''try: import simplejson as json
except: import json
json_product_dict = json.dumps(product_dict, indent = 4)
import sys
f = open('product_data.txt', 'w')
f.write(json_product_dict)
f.close()
'''
####################INSERTING INTO DATABASE###################
#import product_db
#insert_to_db(product_dict)

#print(json_product_dict)
import product_db
product_db.insert_into_db(product_dict)
input("That's all folks!")