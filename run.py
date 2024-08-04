import sys
import os

def show_files():
    for root, dirs, files in os.walk('.'):
        print(root)
        for file in files:
            print(f'  {file}')

if __name__ == '__main__':
    show_files()
    print("hello")
