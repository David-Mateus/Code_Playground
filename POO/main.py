# Poo - python
class ControleRemoto:
    
    def __init__(self, cor, tamanho, profundidade, largura):
        self.cor = cor
        self.tamanho = tamanho
        self.profundidade = profundidade
        self.largura = largura
    
    i = 0
    def mudarCanal(self, botao):
        
        if(botao == "+"):
            i=+1
            print('Aumentou canal', i)
        else:
            i=-1
            print('Diminuiu canal', i)

controle1 = ControleRemoto('Preto', '10', '2cm', '2cm')
controle1.mudarCanal("+")
controle1.mudarCanal("+")
print(controle1.cor)