class Retangulo2 {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }

    exibirDetalhes(): void {
        const area = this.calcularArea();
        const perimetro = this.calcularPerimetro();
        console.log(`Retângulo - Largura: ${this.largura}, Altura: ${this.altura}`);
        console.log(`Área: ${area}, Perímetro: ${perimetro}`);
    }
}

class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    exibirDetalhes(): void {
        const area = this.calcularArea();
        const perimetro = this.calcularPerimetro();
        console.log(`Círculo - Raio: ${this.raio}`);
        console.log(`Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`);
    }
}

const retangulo2 = new Retangulo2(10, 5);
retangulo2.exibirDetalhes(); 

const circulo = new Circulo(7);
circulo.exibirDetalhes();