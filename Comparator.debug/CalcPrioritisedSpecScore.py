#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
db2 = client['Attributes']
products = db['products']

from tabulate import tabulate

#Product = products.find()[0]

Criticality = {'VERY LOW':1.1, 'LOW': 1.3, 'MEDIUM':1.5,'HIGH':1.7, 'VERY HIGH':2}
Priority = {0:1.414, 1:1.303, 2:1.225, 3:1.401, 4:1.049}

SpecScore = {}
def calcAttributeScore(SubAttribute, attribute_list):
    for SubAttributeName in SubAttribute.keys():
        try:
            Collection = SubAttributeName+' Score'
            AttributeValue = SubAttribute[SubAttributeName]
            AttributeScore = db2[Collection].find({"Name":AttributeValue})[0]['Score']
            SpecScore[SubAttributeName] = AttributeScore
            if SubAttributeName in attribute_list:
                AttributeCriticality = db2[Collection].find({"Name":AttributeValue})[0]['Criticality']
                #print("SubAttributeName: ", SubAttributeName)
                #print("\t--AttributeScore: ", AttributeScore)
                #print("\t--AttributeCriticality", AttributeCriticality)
                AttributePriority = attribute_list.index(SubAttributeName)
                SpecScore[SubAttributeName] = AttributeScore * Criticality[AttributeCriticality] * Priority[AttributePriority]
        except: pass

def calcPrioritisedSpecScore(key, attribute_list):
    Product = products.find({"key":key})[0]
    Attribute = Product['specifications']['full_specs']

        ########################GRAPHICS#####################
    try:
        SubAttribute = Attribute['Graphics']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################MEMORY#####################
    try:
        SubAttribute = Attribute['Memory']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################PROCESSOR#####################
    try:
        SubAttribute = Attribute['Processor']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################INPUT#####################
    try:
        SubAttribute = Attribute['Input']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################BATTERY#####################
    try:
        SubAttribute = Attribute['Battery']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################DISPLAY#####################
    try:
        SubAttribute = Attribute['Display']
        calcAttributeScore(SubAttribute, attribute_list)
    except: pass
        ########################CONNECTIVITY#####################
    try:
        SubAttribute = Attribute['Connectivity']
        calcAttributeScore(SubAttribute, attribute_list)
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
