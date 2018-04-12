#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['Attributes']

while True:
    print('Enter the name of the Collection for which you want to modify attribute scores')
    Collection = str(input())
    print('########### Existing Scores ############')
    cursor = db[Collection].find()
    try:
        for doc in cursor:
            print(doc['Name']+' : '+str(doc['Score']))
    finally:
        cursor.close()
    print("*"*40,'\n')
    print("1-Set Unset Scores\n2-Change Individual Scores\n3-Change all Scores\n4-Reset All Scores\n5-Exit")
    choice = int(input())
    if choice == 1:
        cursor = db[Collection].find({'Score':0})
        print("Enter Scores for the following")
        for doc in cursor:
            print(doc["Name"],"-->","Score (Waiting for input): ", end='')
            Score = int(input())
            print(doc["Name"],"-->","Criticality (Waiting for input): ", end='')
            Criticality = int(input())
            db[Collection].update_one({"_id":doc["_id"]}, {"$set": {"Score": Score, "Criticality": Criticality}, upsert=False)
        cursor.close()
    elif choice == 2:
        cursor = db[Collection].find()
        print("Score List")
        for i in range(cursor.count()):
            print(i, "\t", cursor[i]["Name"], "\t:\t", cursor[i]["Score"])
        print("Enter the index of the attribute")
        index = int(input())
        _id = cursor[index]["_id"]
        print(cursor[index]["Name"],"-->","Score (Waiting for input): ", end='')
        Score = int(input())
        Criticality = int(input())
        db[Collection].update_one({"_id":doc["_id"]}, {"$set": {"Score": Score, "Criticality": Criticality}, upsert=False)
        cursor.close()
    elif choice==3:
        cursor = db[Collection].find()
        print("Enter Scores for the following")
        for doc in cursor:
            print(doc["Name"],"-->","Score (Waiting for input): ", end='')
            Score = int(input())
            Criticality = int(input())
            db[Collection].update_one({"_id":doc["_id"]}, {"$set": {"Score": Score, "Criticality": Criticality}, upsert=False)
        cursor.close()
    elif choice==4:
        cursor = db[Collection].find()
        print("Enter Scores for the following")
        for doc in cursor:
            db[Collection].update_one({"_id":doc["_id"]}, {"$set": {"Score": 0, "Criticality": "VERY LOW"}}, upsert=False)
        cursor.close()
    elif choice==5:
        break
    print()
    Choice = input("Edit more collections? (YES/NO) >>> ")
    if Choice == 'YES':
        continue
    else:
        break
