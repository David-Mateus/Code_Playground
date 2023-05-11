class Client:
   
    def __init__(self, nome,email, plano) :
        self.nome = nome
        self.email = email
        self.lista_planos = ['basic', 'premiun']
        if plano in self.lista_planos:
            self.plano = plano
        
        else:
            raise Exception("Plano invalido")
    def mudar_plano(self, novo_plano):
        for novo_plano in self.lista_planos:
            self.plano = novo_plano
    def ver_filmes(self, filme):
        print('Assistindo filme: ', filme)
# print(
# '''
#     Planos Netflix
#     1- Basico
#     2- Padrão
#     3- Premiun
#     4- Ultra

# ''')
# nome = str(input("Nome do cliente: "))
# email = str(input("Email do cliente: "))
# plano = int((input('Qual plano você escolhe:')))

clenteNetlix = Client('David', 'david-mateus09@hotmail.com', 'basic')
print(clenteNetlix.plano)
clenteNetlix.mudar_plano('premiun')
print(clenteNetlix.plano)