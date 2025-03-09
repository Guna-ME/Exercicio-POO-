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
