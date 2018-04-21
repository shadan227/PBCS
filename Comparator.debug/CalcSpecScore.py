#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
db2 = client['Attributes']
products = db['products']

from tabulate import tabulate
#Product = products.find()[0]

SpecScore = {}
def calcAttributeScore(SubAttribute):
    for SubAttributeName in SubAttribute.keys():
        try:
            Collection = SubAttributeName+' Score'
            AttributeValue = SubAttribute[SubAttributeName]
            AttributeScore = db2[Collection].find({"Name":AttributeValue})[0]['Score']
            SpecScore[SubAttributeName] = AttributeScore
        except: pass

def calcSpecScore(key):
    Product = products.find({"key":key})[0]
    Attribute = Product['specifications']['full_specs']
    ########################GRAPHICS#####################
    try:
        SubAttribute = Attribute['Graphics']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################MEMORY#####################
    try:
        SubAttribute = Attribute['Memory']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################PROCESSOR#####################
    try:
        SubAttribute = Attribute['Processor']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################INPUT#####################
    try:
        SubAttribute = Attribute['Input']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################BATTERY#####################
    try:
        SubAttribute = Attribute['Battery']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################DISPLAY#####################
    try:
        SubAttribute = Attribute['Display']
        calcAttributeScore(SubAttribute)
    except: pass
    ########################CONNECTIVITY#####################
    try:
        SubAttribute = Attribute['Connectivity']
        calcAttributeScore(SubAttribute)
    except: pass
    tableContents = []
    tableContents.append('------ '+key+' ------')
    table = []
    for a, v in SpecScore.items():
        tt = [a,round(v,3)]
        table.append(tt)
    table = tabulate(table, tablefmt="plain")
    tableContents.append(table)
    tableContents.append('-'*26)
    tableContents.append("Total Score => "+str(round(sum(SpecScore.values()),3)))
    tableContents.append('-'*26)
    return SpecScore, tableContents