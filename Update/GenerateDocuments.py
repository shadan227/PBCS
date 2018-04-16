#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['Attributes']

import xlwt
from tabulate import tabulate
src = 'Data/'

def readFromMongo(Collection):
    cursor = db[Collection].find()
    print('\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', 'Existing', Collection, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    itemList = []
    try:
        for doc in cursor:
            item = [str(doc['Name']), str(doc['Score']), str(doc['Criticality'])]
            itemList.append(item)
    finally:
        cursor.close()
        print(tabulate(itemList, headers=['Name', 'Score', 'Criticality'], tablefmt='orgtbl'))
    print("-"*100,'\n')

def writeToExcel(Collection):
    attribute_book = xlwt.Workbook()
    Sheet = attribute_book.add_sheet('Sheet')
    documents = db[Collection].find()
    ROW = 0
    for item in documents:
        if db[Collection].find_one({'Name':item}) != None: continue
        Sheet.write(ROW, 0, item['Name'])
        Sheet.write(ROW, 1, item['Score'])
        Sheet.write(ROW, 2, item['Criticality'])
        ROW += 1
    documents.close()
    attribute_book.save(src+Collection+'.xls')
    print("Number of items exported to excel: ",ROW)

Collections = db.collection_names()
for Collection in Collections:
    readFromMongo(Collection)
    writeToExcel(Collection)
    input("Press ENTER to continue")
