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