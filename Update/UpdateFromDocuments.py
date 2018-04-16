#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['Attributes']

from os import listdir
from os.path import isfile, join
import shutil

from tabulate import tabulate

src = 'Data/'
backup = 'Backup'
Collections = listdir(src)

from xlrd import open_workbook

def backupExistingDocuments():
    for file_name in Collections:
        full_file_name = join(src, file_name)
        if isfile(full_file_name):
            shutil.copy(full_file_name, backup)
    print('>>>>>>>>>>>>>>>>>>> Documents backed up in '+backup+' folder <<<<<<<<<<<<<<<<<<<<<<<\n\n')

def readFromExcel(Collection):
    print('\n\n'+'>>>>>>>>>>>>>>>>>>>>>>>','Reading from',Collection,'<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    wb = open_workbook(src+Collection)
    sheet = wb.sheet_by_index(0)
    itemList = []
    for row in range(sheet.nrows):
        item = sheet.row_values(row)
        itemList.append(item)
    else:
        print(tabulate(itemList, headers=['Name', 'Score', 'Criticality'], tablefmt='orgtbl'))


def writeToMongoDB(Collection):
    wb = open_workbook(src+Collection)
    sheet = wb.sheet_by_index(0)
    Collection = Collection[:-4]
    print('------------------------ Updated', Collection, '------------------------------')
    db[Collection].drop()
    for row in range(sheet.nrows):
        item = sheet.row_values(row)
        Name, Score, Criticality = item
        db[Collection].insert([{'Name': Name,'Score': Score, 'Criticality': Criticality}])
    else:
        print("Number of items exported to excel: ",sheet.nrows)

backupExistingDocuments()
for Collection in Collections:
    readFromExcel(Collection)
    writeToMongoDB(Collection)
    input("Press ENTER to continue")
