#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""Template for python3 terminal scripts.
This gist allows you to quickly create a functioning
python3 terminal script using argparse and subprocess.
"""

import argparse
import os
import json
import jpype
import asposecells

__author__ = "Alejandro Cortes"
__copyright__ = "Copyright 2023, Author Org"
__credits__ = ["Alejandro Cortes"]
__license__ = "MIT"
__version__ = "0.0.1"
__maintainer__ = "Alejandro Cortes"
__email__ = "ale.crts1996@gmail.com"
__status__ = "Development"

CREATETABLESPATH = "./querys/001-create-tables.sql"

parser = argparse.ArgumentParser(
    description='Build to convert JSON files to SQL scripts.')

# Optional Arguments
parser.add_argument("-f", "--folder",
                    help="Path to folder.",
                    metavar='path/to/folder',
                    nargs=1)
parser.add_argument("-d", "--document",
                    help="Path to JSON document/file.",
                    metavar='path/to/file.json',
                    nargs=1)

args = parser.parse_args()


def checkFile(filePath: str):
    if filePath.endswith('json'):
        return True
    return False


def checkFolder(folderPath: str):
    try:
        dir = os.listdir(folderPath)
        if len(dir) > 0:
            return True
    except OSError as err:
        print("OS error:", err)

    return False

def folderToSQL(folderPath: str):
    filesInFolder = os.listdir(folderPath)
    # There is a huge bug with District of Columbia
    filesInFolder.remove('District of Columbia.json')
    # It seems the converter can't understand a file with 1 element.
    for file in filesInFolder:
        # Some JSONs come with ' and that is a bug issue for the converter.
        fixJSON(folderPath + file)
        createJSONTable(file)
        JSONtoQuery(folderPath + file, True)
    return 0

def createJSONTable(fileName: str):
    stateName = fileName.split(".")[0].replace(" ", "_").replace("-", "_").lower()

    with open(CREATETABLESPATH, "a") as createFile:
        lines = [
            "\n-- Creation of " + stateName + " table\n",
            "CREATE TABLE IF NOT EXISTS " + stateName + " (\n", 
            "ID SERIAL PRIMARY KEY,\n",
            "county VARCHAR(80),\n",
            "population NUMERIC\n",
            ");\n"
        ]
        createFile.writelines(lines)
    
    print("Table created for state: ", stateName)

    return 0 

def fixJSON(pathToFile: str):
    fileText = ""

    with open(pathToFile) as file:
      fileText = file.read()
    
    fileText = fileText.replace("'", "`")

    with open(pathToFile, "w") as file:
      file.write(fileText)
    print(pathToFile, " - Fixed...")
    return 0

def JSONtoQuery(jsonPath: str, isState = False):
    # First I need to get the proper file's:
    # - Absolute path
    # - Plain name
    jsonPathFull = os.path.abspath(jsonPath)
    jsonFileName = jsonPath.split('/')
    sqlFileName = jsonFileName[len(jsonFileName)-1].split(".")[0] + ".sql"
    # Minor bug fix
    sqlFileName = sqlFileName if isState else "002-" + sqlFileName
    sheetname = jsonFileName[len(jsonFileName)-1].split(".")[0].replace(" ", "_").replace("-", "_").lower()
    savePath = jsonPathFull[0:len(jsonPathFull)-len(jsonPath)+1] + "\\querys\\" + sqlFileName

    # Now I start JVM and open the workbook.
    from asposecells.api import Workbook
    workbook = Workbook(jsonPath)

    worksheets = workbook.getWorksheets()
    worksheet = worksheets.get(0)
    # sheetname = "states_details" if isState else sheetname
    worksheet.setName(sheetname)
    # Save the workbook as SQL.
    workbook.save(savePath)
    print("File ", sqlFileName, " created successfully!")

    return 0


def main():
    if args.document:
        if checkFile(args.document[0]):
            # Do something...
            print("File is a json.")
            jpype.startJVM()
            JSONtoQuery(args.document[0])
            jpype.shutdownJVM()
            return 0
        print("This file is not a json")
        return 0

    if args.folder:
        if checkFolder(args.folder[0]):
            # Do something...
            print("Valid folder!")
            jpype.startJVM()
            folderToSQL(args.folder[0])
            jpype.shutdownJVM()

            return 0
        print("This folder is empty or invalid.")
        return 0

    print("Requires 1 parameter. Run -h for parameters.")
    return 0


if __name__ == '__main__':
    main()
