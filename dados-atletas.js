class Atleta {
    constructor (nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {}

    calculaIMC() {}

    calculaMediaValida() {}

    obtemNomeAtleta() {}

    obtemIdadeAtleta() {}

    obtemPesoAtleta() {}

    obtemNotasAtleta() {}

    obtemCategoria() {}

    obtemIMC() {}

    obtemMediaValida() {}

}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])