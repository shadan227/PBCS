from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']
failed = db['failed']

url_dict = {}
import link_crawler
url_dict.update(link_crawler.run())

import product_crawler
product_dict = {}
total_count = 0
product_list = []
failed_products = {}

def insert_into_db(product_dict):
    if product_dict == {}:
        print('EMPTY PRODUCT DICTIONARY RECEIVED\nTERMINATING')
    else:
        for key, product in product_dict.items():
            product.update({'key':key})
            product_list.append(product)
            print(product['name'], '\t\t\t\tSUCCEFULLY INSERTED')
        products.insert_many(product_list)
        failed.insert_many(failed_products)

###############     Extracting Links     ##############
succesful_insertions = 0
for key, link in url_dict.items():
    if products.find_one({'key':key}) != None: continue     #check if product exists in database
    total_count+=1                                          #counting total products
    try:
        product = product_crawler.run(link)                 #fetching product data corresponding to link
        product_dict[key] = product
        succesful_insertions += 1                           #counting successful insertons
    except:
        print("Failed at: ", link)
        print("Inserting into failed product database")
        failed_products["key"] = link                   #inserting failed links

###############     INSERTING INTO DATABASE     ##############
import product_db
product_db.insert_into_db(product_dict)
for key in failed_products.keys():
    print(failed_products[key], "\t\t\t\tINSERTION FAILED")
print('Number of Succesful Insertions: ',succesful_insertions)
print('Number of Failed Insertions: ', total_count - succesful_insertions)
input("That's all folks!")
