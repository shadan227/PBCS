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

  #  print('\n\n*******************'+key+'********************')
#    for a, v in SpecScore.items():
 #       print(a+':'+str(v))
    #print(SpecScore.values())
    #print("Sum: ", sum(SpecScore.values()))
    return sum(SpecScore.values())
