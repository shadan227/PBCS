#try: import simplejson as json
#except: import json

from pymongo import MongoClient

###################Initializing#################
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']
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

