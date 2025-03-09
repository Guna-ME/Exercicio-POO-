interface MetodoPagamento {
    pagar(valor: number): void;
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
    }
}

class PayPal implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado via PayPal.`);
    }
}

class Boleto implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado com boleto.`);
    }
}

class Compra {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    realizarPagamento(metodo: MetodoPagamento): void {
        console.log(`Iniciando pagamento de R$${this.valor}...`);
        metodo.pagar(this.valor);
    }
}

const compra = new Compra(150.00);

const cartaoCredito = new CartaoCredito();
const paypal = new PayPal();
const boleto = new Boleto();

compra.realizarPagamento(cartaoCredito); 
compra.realizarPagamento(paypal);        
compra.realizarPagamento(boleto);        
