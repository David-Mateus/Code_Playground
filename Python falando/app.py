import gtts
from playsound import playsound
import time

def createFile(name):
    arquivo = open(name+'.txt', 'w+')
    print("Arquivo criado")

qtsFile = int(input('Quantos arquivos você deseja criar? '))
i = 0
listOfFile = []
while i < qtsFile:
    nameFile = str(input('Nome dos arquivos: '))
    listOfFile.append(nameFile)
    i += 1
for arquivo in listOfFile:
    createFile(arquivo)
   

def addText(text, file):
    with open(file+".txt", "w", encoding="utf-8") as arquivo:
        arquivo.write(text)

for file in range(len(listOfFile)):
    choiceFile = str(input("Digite o nome do arquivo: "))
    for i in listOfFile:
        if choiceFile == i:
            textFile = str(input("Digite o texto: "))
            addText(textFile, choiceFile)
    
# def speakPython():
for arquivo in listOfFile:
    nameFileOpen = arquivo
    with open(f"{nameFileOpen}.txt", 'r') as arquivo:
        for linha in arquivo:
            frase = gtts.gTTS(linha, lang='pt-br',)
            frase.save(f"audio/{nameFileOpen}.mp3")
           




