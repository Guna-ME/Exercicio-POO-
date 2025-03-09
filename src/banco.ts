class ContaBancaria {
    numero: number;
    saldo: number;

    constructor(numero: number, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
        console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}

class SistemaBancario {
    private contas: ContaBancaria[] = [];

    criarConta(numero: number, saldoInicial: number): void {
        const novaConta = new ContaBancaria(numero, saldoInicial);
        this.contas.push(novaConta);
    }

    obterConta(numero: number): ContaBancaria | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }
}

const sistema = new SistemaBancario();
sistema.criarConta(123, 1000);

const conta = sistema.obterConta(123);
if (conta) {
    conta.depositar(500);
    conta.sacar(200);
    conta.consultarSaldo();
}
