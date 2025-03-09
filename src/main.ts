class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirArea(): void {
        const area = this.calcularArea();
        console.log(`A área do retângulo é: ${area}`);
    }
}

const retangulo = new Retangulo(50, 4);
retangulo.exibirArea();

//---------------------------------------------------------

class ToDoList {
    private tarefas: string[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: string): void {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    listarTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }

    removerTarefa(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0];
            console.log(`Tarefa "${tarefaRemovida}" removida.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

const minhaLista = new ToDoList();
minhaLista.adicionarTarefa("Estudar TS");
minhaLista.adicionarTarefa("Fazer os exercicios");
minhaLista.listarTarefas();
minhaLista.removerTarefa(0);
minhaLista.listarTarefas();

//---------------------------------------------------------

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

//---------------------------------------------------------

// Classe Tarefa
class Tarefa {
    descricao: string;
    concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;  
    }

    marcarComoConcluida(): void {
        this.concluida = true;
        console.log(`Tarefa "${this.descricao}" marcada como concluída.`);
    }

    exibirDetalhes(): void {
        const status = this.concluida ? "Concluída" : "Pendente";
        console.log(`Tarefa: ${this.descricao} - Status: ${status}`);
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao: string): void {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${descricao}" adicionada.`);
    }

    marcarTarefaComoConcluida(indice: number): void {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].marcarComoConcluida();
        } else {
            console.log("Índice inválido.");
        }
    }

    exibirTarefas(): void {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa cadastrada.");
            return;
        }
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, indice) => {
            console.log(`${indice + 1}. ${tarefa.exibirDetalhes()}`);
        });
    }
}

const gerenciador = new GerenciadorTarefas();

gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.adicionarTarefa("Comprar ingredientes para o jantar");

gerenciador.exibirTarefas();

gerenciador.marcarTarefaComoConcluida(0); 
gerenciador.marcarTarefaComoConcluida(1); 

gerenciador.exibirTarefas();

//---------------------------------------------------------

class Retangulo {
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

const retangulo = new Retangulo(10, 5);
retangulo.exibirDetalhes(); 

const circulo = new Circulo(7);
circulo.exibirDetalhes();

//---------------------------------------------------------

class Produto {
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
        console.log(`O preço do produto "${this.nome}" foi atualizado para R$${this.preco}.`);
    }

    adicionarQuantidade(quantidade: number): void {
        if (quantidade > 0) {
            this.quantidadeEmEstoque += quantidade;
            console.log(`Foram adicionadas ${quantidade} unidades ao produto "${this.nome}". Novo estoque: ${this.quantidadeEmEstoque} unidades.`);
        } else {
            console.log("A quantidade a ser adicionada deve ser maior que zero.");
        }
    }

    removerQuantidade(quantidade: number): void {
        if (quantidade > 0 && this.quantidadeEmEstoque >= quantidade) {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`Foram removidas ${quantidade} unidades do produto "${this.nome}". Novo estoque: ${this.quantidadeEmEstoque} unidades.`);
        } else if (quantidade > this.quantidadeEmEstoque) {
            console.log("Não há estoque suficiente para remover essa quantidade.");
        } else {
            console.log("A quantidade a ser removida deve ser maior que zero.");
        }
    }

    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome} - Preço: R$${this.preco.toFixed(2)} - Estoque: ${this.quantidadeEmEstoque} unidades`);
    }
}

class CadastroProdutos {
    private produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome: string, preco: number, quantidadeEmEstoque: number): void {
        const produto = new Produto(nome, preco, quantidadeEmEstoque);
        this.produtos.push(produto);
        console.log(`Produto "${nome}" adicionado ao estoque.`);
    }

    atualizarPrecoProduto(nome: string, novoPreco: number): void {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.atualizarPreco(novoPreco);
        } else {
            console.log(`Produto "${nome}" não encontrado.`);
        }
    }

    exibirRelatorio(): void {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }
        console.log("Relatório de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}

const cadastro = new CadastroProdutos();

cadastro.adicionarProduto("Camiseta", 50.00, 100);
cadastro.adicionarProduto("Tênis", 250.00, 50);
cadastro.adicionarProduto("Boné", 30.00, 200);

cadastro.atualizarPrecoProduto("Camiseta", 55.00);
cadastro.atualizarPrecoProduto("Tênis", 270.00);

const produtoCamiseta = cadastro["produtos"].find(p => p.nome === "Camiseta");
if (produtoCamiseta) {
    produtoCamiseta.adicionarQuantidade(50);
    produtoCamiseta.removerQuantidade(30);
}

cadastro.exibirRelatorio();

//---------------------------------------------------------

interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    receberNotificacao(notificacao: Notificacao, mensagem: string): void {
        console.log(`Usuário ${this.nome} recebeu a seguinte mensagem:`);
        notificacao.enviar(mensagem);
    }
}

const usuario = new Usuario("João");

const email = new EmailNotificacao();
const sms = new SmsNotificacao();
const push = new PushNotificacao();

usuario.receberNotificacao(email, "Sua conta foi atualizada.");
usuario.receberNotificacao(sms, "Você tem um novo SMS.");
usuario.receberNotificacao(push, "Você recebeu uma nova mensagem no aplicativo.");

//---------------------------------------------------------

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

//---------------------------------------------------------

interface Relatorio {
    gerar(dados: string[]): void;
}

class PdfRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em PDF com os dados: ${dados.join(", ")}`);
    }
}

class ExcelRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em Excel com os dados: ${dados.join(", ")}`);
    }
}

class HtmlRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em HTML com os dados: ${dados.join(", ")}`);
    }
}

class Gerente {
    solicitarRelatorio(relatorio: Relatorio, dados: string[]): void {
        console.log("Solicitando geração de relatório...");
        relatorio.gerar(dados);
    }
}

const gerente = new Gerente();

const dados = ["Vendas: R$5000", "Lucro: R$2000", "Custos: R$1000"];

const pdfRelatorio = new PdfRelatorio();
const excelRelatorio = new ExcelRelatorio();
const htmlRelatorio = new HtmlRelatorio();

gerente.solicitarRelatorio(pdfRelatorio, dados);    
gerente.solicitarRelatorio(excelRelatorio, dados); 
gerente.solicitarRelatorio(htmlRelatorio, dados);   
