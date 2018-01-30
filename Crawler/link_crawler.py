import requests
from bs4 import BeautifulSoup

def run():
    '''***********************************Main Construct************************'''
    url_dict = {}
    print("ENTER THE PAGE RANGE FROM WHERE YOU WANT TO EXTRACT DATA")
    print('Example: 1, 1-9')
    a = list(map(int, input('> ').split('-')))
    try: first, last = a
    except: first = a.pop()
    if a == []:
        temp = fetch_url_list_from_page(first)
        url_dict.update(temp)
    else:
        for p_no in range(first, last+1):
            temp = fetch_url_list_from_page(p_no)
            url_dict.update(temp)
    count = 1
    for key in url_dict.keys():
        print(str(count) + '\t- ', key, ':', url_dict[key])
        count += 1

    print("Total links received: ", len(url_dict))
    input('PRESS ENTER KEY TO CONTINUE')
    return url_dict


def fetch_url_list_from_page(p_no):
    '''Function to fetch data from given page number'''
    link = "https://www.smartprix.com/laptops/?page=" + str(p_no) #+ "&sort=spec_score&asc=0"
    page = requests.get(link)
    soup = BeautifulSoup(page.content, 'html.parser')                       #parsing the html page elements
    laptop_list = soup.find('ul', class_ = 'list-content')                  #contains the list of all laptops
    url_dict = url_list_constructor(laptop_list)                            #receiving dictionary of key: url
    return url_dict


def url_list_constructor(laptop_list):
    '''*********************Extracting URL**************************'''
    url_dict = {}
    for i in list(laptop_list.children):
        item = i.find('a')
        try:
            if 'href' in item.attrs:
                url = item['href'][9:]                                      #0-8 in string is '/laptops/'
                key = url.split('-')[-1]
                url_dict[key] = url
        except: pass
    return url_dict

#run()
