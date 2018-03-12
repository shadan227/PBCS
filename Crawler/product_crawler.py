import requests
from bs4 import BeautifulSoup

def process_full_specs(full_specs):
    table1, table2 = full_specs.find_all('table')
    specs = {}
    table1 = process_spec_table(table1)
    table2 = process_spec_table(table2)
    specs.update(table1)
    specs.update(table2)
    return specs
    
def process_spec_table(table):
    row_list = table.find_all('tr')
    spec_dict = {}
    sub_spec = {}
    heading = ""
    for row in row_list:
#        print(row.get_text())
        row  = row.get_text().split(':')
        if len(row) > 1:
            sub_spec[row[0]] = row[1]
        elif len(row) == 1 and row[0] != '':
            heading = row[0]
        else:
            spec_dict[heading] =  sub_spec
            sub_spec = {}   
    return spec_dict
''''    
def process_advantages(advantages):
    table = advantages.table.tbody.find_all('tr')
    return advantages'''
    
'''def process_disadvantages(disadvantages):'''

'''def process_prices(price_comparisons):'''
    
def run(link):
    product = {}
    tags = link.split('-')
    link = 'https://www.smartprix.com/laptops/' + link + "?tab=specifications"      #to navigate to specifications tab
    page = requests.get(link)                                                       #receiving page element                
    soup = BeautifulSoup(page.content, 'html.parser')                               #html parsing
    html = list(soup.children)[2]                                                   #navigating to html structure
    body = list(html.children)[3]                                                   #navigating to body tag
    content_wrapper = list(body.children)[11]                                       #navigating to div tag with content-wrapper class
    main_content = list(content_wrapper.children)[1]                                #navigating to main-content class  
    tab_content = list(main_content.children)[21]                                   #navigating to tab-content class
    price_comparisons = list(tab_content.children)[1]                               #selecting price-content
    specifications = list(tab_content.children)[3]                                  #selecting specifications
    advantages = specifications.find('div', id = 'advantages')                      #selecting advantages
    disadvantages = specifications.find('div', id = 'dis-advantages')               #selecting disadvantages
    full_specs = specifications.find('div', id = 'full-specs')                      #selecting full-specs
    specifications = {}
    specifications['full_specs'] = process_full_specs(full_specs)
    #specifications['advantages'] = process_advantages(advantages)
    #specifications['disadvantages'] = process_disadvantages(disadvantages)
    #prices = process_prices(price_comparisons)
    name = main_content.div.h1.get_text()
    brand = name.split(' ')[0]
    price = "".join(list(price_comparisons.tbody.tr.children)[7].get_text().split('\n')[2].split('\t')[6][4:].split(','))
    img = 'https://img2.smartprix.com/laptops/' + tags[-1][1:] + '/n-1.jpg'
    product['brand'] = brand
    product['name'] = name
    product['price']  = price
    product['tags'] = tags
    product['img'] = img
    product['specifications'] = specifications
    #print(name)
    return product