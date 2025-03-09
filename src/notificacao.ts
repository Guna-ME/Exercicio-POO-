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
