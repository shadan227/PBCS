from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']
failed = db['failed']
url_dict = {}
import link_crawler
url_dict.update(link_crawler.run())

import product_crawler
successful_products_dict = {}
successful_products_list = []
failed_products_list = []
total_count = 0
succesful_insertions = 0

def insert_into_db(successful_products_dict):
    if successful_products_dict == {}:
        print('EMPTY PRODUCT DICTIONARY RECEIVED\nTERMINATING')
    else:
        for key, product in successful_products_dict.items():
            product.update({'key':key})
            print('SUCCEFULLY INSERTED:\t',product['name'])
            successful_products_list.append(product)
        products.insert_many(successful_products_list)

###############     Extracting Links     ##############
for key, link in url_dict.items():
    if products.find_one({'key':key}) != None: continue     #check if product exists in database
    total_count+=1
    print('Processing Product Number: ', total_count)       #counting total products
    try:
        product = product_crawler.run(link)                 #fetching product data corresponding to link
        successful_products_dict[key] = product
        succesful_insertions += 1                           #counting successful insertons
    except:
        print("Failed at: ", link)
        print("Inserting into failed product database")
        failed_products_list.append({'link':link})           #inserting failed links

###############     INSERTING INTO DATABASE     ##############
insert_into_db(successful_products_dict)
for link in failed_products_list:
    print('INSERTION FAILED:\t',link)
failed.insert_many(failed_products_list)
print('Number of Succesful Insertions: ',succesful_insertions)
print('Number of Failed Insertions: ', total_count - succesful_insertions)
input("That's all folks!")
