#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
db2 = client['Attributes']
products = db['products']

#Product = products.find()[0]

Criticality = {'VERY LOW':1.1, 'LOW': 1.3, 'MEDIUM':1.5,'HIGH':1.7, 'VERY HIGH':2}
Priority = {1:1.414, 2:1.303, 3:1.225, 4:1.401, 5:1.049}

SpecScore = {}
def calcAttributeScore(SubAttribute, attribute_list):
    for SubAttributeName in SubAttribute.keys():
        try:
            Collection = SubAttributeName+' Score'
            AttributeValue = SubAttribute[SubAttributeName]
            AttributeScore = db2[Collection].find({"Name":AttributeValue})[0]['Score']
            AttributeCriticality = db2[Collection].find({"Name":AttributeValue})[0]['Criticality']
            SpecScore[SubAttributeName] = AttributeScore
            if SubAttributeName in AttributeList:
                AttributePriority = AttributeList.index(AttributePriority)
                SpecScore[SubAttributeName] = AttributeScore * Criticality[AttributeCriticality] * Priority[AttributePriority]
        except: pass

def calcPrioritisedSpecScore(key, attribute_list):
    Product = products.find({"key":key})[0]
    Attribute = Product['specifications']['full_specs']

    ########################GRAPHICS#####################
    SubAttribute = Attribute['Graphics']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################MEMORY#####################
    SubAttribute = Attribute['Memory']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################PROCESSOR#####################
    SubAttribute = Attribute['Processor']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################INPUT#####################
    SubAttribute = Attribute['Input']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################BATTERY#####################
    SubAttribute = Attribute['Battery']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################DISPLAY#####################
    SubAttribute = Attribute['Display']
    calcAttributeScore(SubAttribute, attribute_list)

    ########################CONNECTIVITY#####################
    SubAttribute = Attribute['Connectivity']
    calcAttributeScore(SubAttribute, attribute_list)

    return SpecScore
