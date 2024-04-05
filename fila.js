class Fila {
    constructor() {
        this.items = [];
    }

    enfileirar(item) {
        this.items.push(item);
    }

    desenfileirar() {
        if (this.vazia()) {
            throw new Error('A fila está vazia.');
        }
        return this.items.shift();
    }

    vazia() {
        return this.items.length === 0;
    }
}

module.exports = { Fila };