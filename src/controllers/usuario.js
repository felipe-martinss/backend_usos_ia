const db = require('../db');

const login = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                erro: 'Informe email e senha no corpo da requisição'
            });
        }
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                erro: 'Informe email e senha'
            });
        }
        const sql = `
            SELECT id, nome, email
            FROM usuario
            WHERE email = ? AND senha = PASSWORD(?)
        `;
        const [results] = await db.query(sql, [email, senha]);
        if (results.length === 0) {
            return res.status(404).json({
                erro: 'Acesso negado, credenciais inválidas'
            });
        }
        return res.json({
            mensagem: 'Login realizado com sucesso',
            usuario: results[0]
        });
    } catch (e) {
        console.error('Erro no login:', e);
        return res.status(500).json({
            erro: 'Erro ao realizar login'
        });
    }
};

const listar = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM usuario WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Registro não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const criar = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    await db.query(
      'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
      [nome, email, senha, id]
    );
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM usuario WHERE id = ?', [id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

module.exports = {login, listar, buscarPorId, criar, atualizar, deletar };
