#######################Connecting to MongoDB########################
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['test']
Attributes = client['Attributes']
products = db['products']

########################Connection to Ms-Excel######################
import xlwt
import xlrd


#AttrList = 'Processor', 'Speed', 'Cache', 'CPU Score', 'RAM', 'Maximum RAM Supported',
#           'RAM Slots', 'Hard Disk Capacity', 'Hard Disk Speed', 'RAM Bus Speed',
#           'Solid State Drive', 'Hard Disk Interface', 'GPU', 'Dedicated Memory', 'Battery',

def insertAttribute(Collection, Attribute):
#    exists = False
#     ************ ERATE EXCEL SHEETS FOR FAST DATA INSERTION *********
#    try:
#        attribute_book = xlrd.open_workbook('Data/'+Collection+'.xls')
#        sheet = book.sheet_by_index(0)
#        ROW = sheet.nrows
#    except:
#        attribute_book = xlwt.Workbook()
#        Sheet = attribute_book.add_sheet('Sheet')
#        ROW = 0
#
#    print("ROW:", ROW)
    Attribute_Score = {}
    for item in Attribute:
        if Attributes[Collection].find_one({'Name':item}) != None: continue
        Attributes[Collection].insert([{'Name': item,'Score': 0, 'Criticality': 'VERY LOW'}])
#        Sheet.write(ROW, 0, item)
#        Sheet.write(ROW, 1, 0)
#        Sheet.write(ROW, 2, 'VERY LOW')
#        ROW+=1
#    attribute_book.save('Data/'+Collection+'.xls')


############################PROCESSOR################################

#Processor
Processor = set()
query = {"specifications.full_specs.Processor.Processor":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Processor.add(doc["specifications"]["full_specs"]["Processor"]["Processor"])
finally:
    cursor.close()

insertAttribute('Processor Score', Processor)

#Speed
Speed = set()
query = {"specifications.full_specs.Processor.Speed":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Speed.add(doc["specifications"]["full_specs"]["Processor"]["Speed"])
finally:
    cursor.close()

insertAttribute('Speed Score', Speed)

#Cache
Cache = set()
query = {"specifications.full_specs.Processor.Cache":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Cache.add(doc["specifications"]["full_specs"]["Processor"]["Cache"])
finally:
    cursor.close()

insertAttribute('Cache Score', Cache)

#CPU Score
CPU_Score = set()
query = {"specifications.full_specs.Processor.CPU Score":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        CPU_Score.add(doc["specifications"]["full_specs"]["Processor"]["CPU Score"])
finally:
    cursor.close()

insertAttribute('CPU Score Score', CPU_Score)

#################################Memory################################

#RAM
RAM = set()
query = {"specifications.full_specs.Memory.RAM":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        RAM.add(doc["specifications"]["full_specs"]["Memory"]["RAM"])
finally:
    cursor.close()

insertAttribute('RAM Score', RAM)

#Maximum Ram Supported
Maximum_Ram_Supported = set()
query = {"specifications.full_specs.Memory.Maximum RAM Supported":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Maximum_Ram_Supported.add(doc["specifications"]["full_specs"]["Memory"]["Maximum RAM Supported"])
finally:
    cursor.close()

insertAttribute('Maximum Ram Supported Score', Maximum_Ram_Supported)

#RAM Slots
RAM_Slots = set()
query = {"specifications.full_specs.Memory.RAM Slots":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        RAM_Slots.add(doc["specifications"]["full_specs"]["Memory"]["RAM Slots"])
finally:
    cursor.close()

insertAttribute('RAM Slots Score', RAM_Slots)

#Hard Disk Capacity
Hard_Disk_Capacity = set()
query = {"specifications.full_specs.Memory.Hard Disk Capacity":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Hard_Disk_Capacity.add(doc["specifications"]["full_specs"]["Memory"]["Hard Disk Capacity"])
finally:
    cursor.close()

insertAttribute('Hard Disk Capacity Score', Hard_Disk_Capacity)

#Hard Disk Speed
Hard_Disk_Speed = set()
query = {"specifications.full_specs.Memory.Hard Disk Speed":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Hard_Disk_Speed.add(doc["specifications"]["full_specs"]["Memory"]["Hard Disk Speed"])
finally:
    cursor.close()

insertAttribute('Hard Disk Speed Score', Hard_Disk_Speed)

#RAM Bus Speed
RAM_Bus_Speed = set()
query = {"specifications.full_specs.Memory.RAM Bus Speed":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        RAM_Bus_Speed.add(doc["specifications"]["full_specs"]["Memory"]["RAM Bus Speed"])
finally:
    cursor.close()

insertAttribute('RAM Bus Speed Score', RAM_Bus_Speed)

#Solid State Drive
Solid_State_Drive = set()
query = {"specifications.full_specs.Memory.Solid State Drive":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Solid_State_Drive.add(doc["specifications"]["full_specs"]["Memory"]["Solid State Drive"])
finally:
    cursor.close()

insertAttribute('Solid State Drive Score', Solid_State_Drive)

#Hard Disk Interface
Hard_Disk_Interface = set()
query = {"specifications.full_specs.Memory.Hard Disk Interface":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Hard_Disk_Interface.add(doc["specifications"]["full_specs"]["Memory"]["Hard Disk Interface"])
finally:
    cursor.close()

insertAttribute('Hard Disk Interface Score', Hard_Disk_Interface)

#####################################GRAPHICS##################################

#GPU
GPU = set()
query = {"specifications.full_specs.Graphics.GPU":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        GPU.add(doc["specifications"]["full_specs"]["Graphics"]["GPU"])
finally:
    cursor.close()

insertAttribute('GPU Score', GPU)

#Dedicated Memory
Dedicated_Memory = set()
query = {"specifications.full_specs.Graphics.Dedicated Memory":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        GPU.add(doc["specifications"]["full_specs"]["Graphics"]["Dedicated Memory"])
finally:
    cursor.close()

insertAttribute('Dedicated Memory Score', Dedicated_Memory)

#####################################BATTERY##################################

#Battery
Battery = set()
query = {"specifications.full_specs.Battery.Battery":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Battery.add(doc["specifications"]["full_specs"]["Battery"]["Battery"])
finally:
    cursor.close()

insertAttribute('Battery Score', Battery)

#Battery Backup
Battery_Backup = set()
query = {"specifications.full_specs.Battery.Battery Backup":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Battery_Backup.add(doc["specifications"]["full_specs"]["Battery"]["Battery Backup"])
finally:
    cursor.close()

insertAttribute('Battery Backup Score', Battery_Backup)

#Adapter Type
Adapter_Type = set()
query = {"specifications.full_specs.Battery.Adapter Type":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Adapter_Type.add(doc["specifications"]["full_specs"]["Battery"]["Adapter Type"])
finally:
    cursor.close()

insertAttribute('Adapter Type Score', Adapter_Type)


#####################################INPUT##################################

#KeyBoard Backlit
Keyboard_Backlit = set()
query = {"specifications.full_specs.Input.Keyboard Backlit":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Keyboard_Backlit.add(doc["specifications"]["full_specs"]["Input"]["Keyboard Backlit"])
finally:
    cursor.close()

insertAttribute('Keyboard Backlit Score', Keyboard_Backlit)

#Pointer Device
Pointer_Device = set()
query = {"specifications.full_specs.Input.Pointer Device":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Pointer_Device.add(doc["specifications"]["full_specs"]["Input"]["Pointer Device"])
finally:
    cursor.close()

insertAttribute('Pointer Device Score', Pointer_Device)

#Optical Drive
Optical_Drive = set()
query = {"specifications.full_specs.Input.Optical Drive":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Optical_Drive.add(doc["specifications"]["full_specs"]["Input"]["Optical Drive"])
finally:
    cursor.close()

insertAttribute('Optical Drive Score', Optical_Drive)

#Optical Drive Speed
Optical_Drive_Speed = set()
query = {"specifications.full_specs.Input.Optical Drive Speed":{"$exists":True}}
cursor = products.find(query)
try:
    for doc in cursor:
        Optical_Drive_Speed.add(doc["specifications"]["full_specs"]["Input"]["Optical Drive Speed"])
finally:
    cursor.close()

insertAttribute('Optical Drive Speed Score', Optical_Drive_Speed)
