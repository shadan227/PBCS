#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
db2 = client['Attributes']
products = db['products']

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
    SubAttribute = Attribute['Graphics']
    calcAttributeScore(SubAttribute)

    ########################MEMORY#####################
    SubAttribute = Attribute['Memory']
    calcAttributeScore(SubAttribute)

    ########################PROCESSOR#####################
    SubAttribute = Attribute['Processor']
    calcAttributeScore(SubAttribute)

    ########################INPUT#####################
    SubAttribute = Attribute['Input']
    calcAttributeScore(SubAttribute)

    ########################BATTERY#####################
    SubAttribute = Attribute['Battery']
    calcAttributeScore(SubAttribute)

    ########################DISPLAY#####################
    SubAttribute = Attribute['Display']
    calcAttributeScore(SubAttribute)

    ########################CONNECTIVITY#####################
    SubAttribute = Attribute['Connectivity']
    calcAttributeScore(SubAttribute)

    return SpecScore
