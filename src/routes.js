const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuario');
router.post('/usuario/login', usuarioController.login)
router.get('/usuario', usuarioController.listar);
router.get('/usuario/:id', usuarioController.buscarPorId);
router.post('/usuario', usuarioController.criar);
router.put('/usuario/:id', usuarioController.atualizar);
router.delete('/usuario/:id', usuarioController.deletar);

const usoiaController = require('./controllers/usoia');
router.get('/usoia', usoiaController.listar);
router.get('/usoia/:id', usoiaController.buscarPorId);
router.post('/usoia', usoiaController.criar);
router.put('/usoia/:id', usoiaController.atualizar);
router.delete('/usoia/:id', usoiaController.deletar);
router.delete('/usoia/resumo', usoiaController.resumo);

module.exports = router;