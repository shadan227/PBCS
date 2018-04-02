#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
products = db['products']

#Product = products.find()[0]

SpecScore = {}
def CalcAttributeScore(SubAttribute):
    for SubAttributeName in SubAttribute.keys():
        try:
            Collection = SubAttributeName+' Score'
            AttributeValue = SubAttribute[SubAttributeName]
            AttributeScore = db[Collection].find({"Name":AttributeValue})[0]['Score']
            SpecScore[SubAttributeName] = AttributeScore
        except: pass

def CalcSpecScore(Product):
    Attribute = Product['specifications']['full_specs']
    ########################GRAPHICS#####################
    SubAttribute = Attribute['Graphics']
    CalcAttributeScore(SubAttribute)
    
    ########################MEMORY#####################
    SubAttribute = Attribute['Memory']
    CalcAttributeScore(SubAttribute)
    
    ########################PROCESSOR#####################
    SubAttribute = Attribute['Processor']
    CalcAttributeScore(SubAttribute)
    
    ########################INPUT#####################
    SubAttribute = Attribute['Input']
    CalcAttributeScore(SubAttribute)
    
    ########################BATTERY#####################
    SubAttribute = Attribute['Battery']
    CalcAttributeScore(SubAttribute)
    
    ########################DISPLAY#####################
    SubAttribute = Attribute['Display']
    CalcAttributeScore(SubAttribute)
    
    ########################CONNECTIVITY#####################
    SubAttribute = Attribute['Connectivity']
    CalcAttributeScore(SubAttribute)
    
    ########################INPUT#####################
    SubAttribute = Attribute['Input']
    CalcAttributeScore(SubAttribute)
    
    return SpecScore