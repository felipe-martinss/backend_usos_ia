const db = require('../db');

const listar = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usoia');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM usoia WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Registro não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const criar = async (req, res) => {
  const { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO usoia (usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body;
  try {
    await db.query(
      'UPDATE usoia SET usuarioId = ?, sistema = ?, tipo = ?, finalidade = ?, tecnologia = ?, nivelRisco = ?, revisaoHumana = ? WHERE id = ?',
      [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana, id]
    );
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM usoia WHERE id = ?', [id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
const resumo = async (req, res) => {
    try {
        const [riscos] = await db.query(
            'SELECT nivelRisco, COUNT(*) AS total FROM usoia GROUP BY nivelRisco'
        );
        const [eventos] = await db.query(
            'SELECT * FROM usoia'
        );
        res.json({
            resumo: riscos,
            eventos: eventos
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: err.message });
    }
};
module.exports = { listar, buscarPorId, criar, atualizar, deletar, resumo };
