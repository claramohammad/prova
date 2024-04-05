const { Fila } = require('../fila');
const {test, expect} = require('@jest/globals');

describe('Fila', () => {
    let fila;

    beforeEach(() => {
        fila = new Fila();
    });

    test('Deve enfileirar um intem', () => {
        fila.enfileirar('tarefa1');
        expect(fila.vazia()).toBe(false);
    });

    test('Deve desenfileirar um item', () => {
        fila.enfileirar('tarefa1');
        const item = fila.desenfileirar();
        expect(item).toBe('tarefa1');
        expect(fila.vazia()).toBe(true);
    });

    test('Deve avisar quando a fila está vazia', () => {
        expect(() => fila.desenfileirar()).toThrow('A fila está vazia.');
    });
});
