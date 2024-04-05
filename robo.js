const { Fila } = require('./fila');

class RoboDeLimpeza {
    constructor() {
        this.fila = new Fila();
        this.inicializarTarefasPadrao();
    }

    inicializarTarefasPadrao() {
        // Adicione as tarefas-padrão à fila
        this.fila.enfileirar('Limpar a sala de estar');
        this.fila.enfileirar('Limpar a cozinha');
        this.fila.enfileirar('Limpar o banheiro');
    }

    adicionarTarefa(tarefa) {
        this.fila.enfileirar(tarefa);
    }

    executarProximaTarefa() {
        if (this.fila.vazia()) {
            console.log('A fila está vazia.');
            return;
        }
    
        const tarefa = this.fila.desenfileirar();
        console.log(`Executando a tarefa: ${tarefa}`);
        return tarefa;
    }
    

    executarTodasTarefas() {
        const tarefasExecutadas = [];
        while (!this.fila.vazia()) {
            const tarefa = this.fila.desenfileirar();
            console.log(`Executando a tarefa: ${tarefa}`);
            tarefasExecutadas.push(tarefa);
        }
        return tarefasExecutadas;
    }
}

module.exports = { RoboDeLimpeza };