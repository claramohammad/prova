const express = require('express');
const app = express();
const { RoboDeLimpeza } = require('./robo');

const robo = new RoboDeLimpeza();

// Endpoint para executar todas as tarefas
app.get('/executar_todas_tarefas', (req, res) => {
    // Lógica para executar todas as tarefas do Robô de Limpeza
    const tarefasExecutadas = robo.executarTodasTarefas(); // Array para armazenar as tarefas executadas
    if (tarefasExecutadas.length > 0) {
        // Se houver tarefas executadas, retornar status 200 OK com a lista de tarefas executadas
        res.status(200).json({
            mensagem: 'Todas as tarefas foram executadas com sucesso.',
            tarefasExecutadas: tarefasExecutadas
        });
    } else {
        // Se não houver tarefas executadas, retornar status 204 No Content
        res.status(204).json({
            mensagem: 'Não há tarefas pendentes a serem executadas',
            tarefasExecutadas: []
        });
    }
});

// Iniciar o servidor na porta desejada
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});