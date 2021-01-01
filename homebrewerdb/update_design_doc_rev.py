#!/usr/bin/python3

import sys, getopt, json


def main(argv):
    inputfile = ''
    rev = ''
    try:
        opts, args = getopt.getopt(argv,"hi:r:",["ifile=","rev="])
    except getopt.GetoptError:
        print('update_design_doc_rev.py -i <inputfile> -r <rev>')
        print('getopt error')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('update_design_doc_rev.py -i <inputfile> -r <rev>')
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-r", "--rev"):
            rev = arg
    with open(inputfile, "r") as f:
        data = json.load(f)
        print("Before:", data)
        data["_rev"] = rev
        print("After: ", data)
    with open(inputfile, "w") as f:
        f.write(json.dumps(data))

if __name__ == "__main__":
   main(sys.argv[1:])