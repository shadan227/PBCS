#set your mongodb path

from subprocess import call
import os
path = '--dbpath=' + os.getcwd() + '\\Database'
call(['mongod', path])
