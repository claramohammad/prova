const { RoboDeLimpeza } = require('../robo');
const {test, expect} = require('@jest/globals');


describe('RoboDeLimpeza', () => {
    let robo;

    beforeEach(() => {
        robo = new RoboDeLimpeza();
        robo.fila.items = [];
    });

    describe('adicionarTarefa', () => {
        it('Deve adicionar uma tarefa', () => {
            const tarefa = 'Limpar a sala';
            robo.adicionarTarefa(tarefa);
            expect(robo.fila.items).toContain(tarefa);
        });
    });

    describe('executarProximaTarefa', () => {
        it('Deve executar a próxima tarefa da fila', () => {
            const tarefa1 = 'Limpar a sala';
            const tarefa2 = 'Limpar o quarto';
            robo.adicionarTarefa(tarefa1);
            robo.adicionarTarefa(tarefa2);
            robo.executarProximaTarefa();
            expect(robo.fila.items).not.toContain(tarefa1);
            expect(robo.fila.items).toContain(tarefa2);
        });

        it('Não deve executar nenhuma tarefa se a fila estiver vazia', () => {
            robo.executarProximaTarefa();
            expect(robo.fila.items).toEqual([]);
        });
    });

    describe('executarTodasTarefas', () => {
        it('Deve executar todas as tarefas da fila', () => {
            const tarefa1 = 'Limpar a sala';
            const tarefa2 = 'Limpar o quarto';
            robo.adicionarTarefa(tarefa1);
            robo.adicionarTarefa(tarefa2);
            robo.executarTodasTarefas();
            expect(robo.fila.items).toEqual([]);
        });

        it('Não deve executar nenhuma tarefa se a fila estiver vazia', () => {
            robo.executarTodasTarefas();
            expect(robo.fila.items).toEqual([]);
        });
    });
});
