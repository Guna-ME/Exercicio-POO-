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
