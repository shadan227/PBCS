half_link = 'hp-15-bs145tu-notebook-8th-gen-ci5-8gb-1tb-freedos-p130125q7rjj'    #dummy test link

def process_specs_table(table):
    row_list = table.find_all('tr')
    spec_dict = {}
    sub_spec = {}
    heading = ""
    for row in row_list:
        #print(row.get_text())
        row  = row.get_text().split(':')                #Extracting row data
        if len(row) > 1:
            sub_spec[row[0]] = row[1]                   
        elif len(row) == 1 and row[0] != '':            #This is a heading
            heading = row[0]
        else:
            spec_dict[heading] =  sub_spec              #This is a sub-specification
            sub_spec = {}   
    return spec_dict

def process_full_specs(specs_table_left, specs_table_right):
    specs = {}
    specs_table_left = process_specs_table(specs_table_left)
    specs_table_right = process_specs_table(specs_table_right)
    specs.update(specs_table_left)
    specs.update(specs_table_right)
    return specs

##################################     library imports   #####################################
import pprint
import requests
from bs4 import BeautifulSoup
##################################     printing settings #####################################
pp = pprint.PrettyPrinter(indent=4)
##################################     fetching data     #####################################
def run(half_link):
    link = 'https://www.smartprix.com/laptops/' + half_link 
    page = requests.get(link)
    soup = BeautifulSoup(page.content, 'html.parser')
    product = {}
    specs_table_left = soup.find('table', class_ = 'specs-table left')
    specs_table_right = soup.find('table', class_ = 'specs-table right')
    product['name'] = soup.find('h1', itemprop= 'name').get_text()
    product['price'] = soup.find('span', class_ = 'price').get_text()
    product['brand'] = product['name'].split(' ')[0]
    product['tags'] = link[34:].split('-')
    product['img'] = 'https://img2.smartprix.com/laptops/' + product['tags'][-1][1:] + '/n-1.jpg'
    product['specs'] = process_full_specs(specs_table_left, specs_table_right)
    #pp.pprint(product)
    return product
    
###########################     Uncomment next line to test script     ############################
#run(half_link)