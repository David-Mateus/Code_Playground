from flask import Flask, jsonify, request, json, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")
# read file
with open('book.json', 'r') as myfile:
    data = myfile.read()
objectBook = json.loads(data)

# Consultar(todos)
@app.route('/livros', methods = ['GET'])
def getAllBook():
    return jsonify(objectBook)
# Consultar por ID
@app.route('/livros/<int:id>', methods = ['GET'])
def getBookId(id):
    for livro in objectBook:
        if livro.get('id') == id:
            return jsonify(livro)
#Create
@app.route('/livros', methods = ['POST'])
def createBook():
    novo_livro = request.get_json()
    objectBook.append(novo_livro)
    return jsonify(novo_livro)
#Update
@app.route('/livros/<int:id>', methods = ['PUT'])
def updateBook(id):
    livro_alterado = request.get_json()
    for indice, livro in enumerate(objectBook):
        if livro.get('id') == id:
            objectBook[indice].update(livro_alterado)
            return jsonify(objectBook[indice])
# delete
@app.route('/livros/<int:id>', methods = ['DELETE'])
def deleteBook(id):
     for indice, livro in enumerate(objectBook):
            if livro.get('id') == id:
                del objectBook[indice]
     return jsonify(objectBook)
     
    
app.run(port=3000, host='localhost', debug=True)