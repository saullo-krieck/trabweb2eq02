const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { usuarios, categorias, solicitacoes } = require('./data.js');

const app = express();
const PORT = 8080;
const JWT_SECRET = 'mock-secret-web2';

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

function autenticar(req, res, next) {
    const auth = req.headers['authorization'];
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token não fornecido.' })
    }
    try {
        req.usuario = jwt.verify(auth.split(' ')[1], JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
}

function autorizar(perfil) {
    return (req, res, next) => {
        if (req.usuario.perfil !== perfil) {
            res.status(403).json({ message: 'Acesso negado.' });
        }
        next();
    }
}

// LOGIN
app.post('/api/auth/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
        return res.status(401).json({ message: 'E-mail ou senha inválidos' });
    }

    const { senha: _, ...dadosUsuario } = usuario;

    const token = jwt.sign({ id: usuario.id, email: usuario.email, perfil: usuario.perfil },
        JWT_SECRET,
        { expiresIn: '8h' }
    );

    res.json({ token, usuario: dadosUsuario });
});

// CATEGORIAS (auth required)
app.get('/api/categorias', autenticar, (req, res) => {
    res.json(categorias);
});

// USUÁRIOS (auth required + funcionario)
app.get('/api/usuarios', autenticar, autorizar('FUNCIONARIO'), (req, res) => {
    const lista = usuarios.map(({ senha: _, ...u }) => u);
    res.json(lista);
});

app.listen(PORT, () => {
    console.log(`\nMock Server rodando em http://localhost:${PORT}\n`);
});

// SOLICITAÇÕES
app.get('/api/solicitacoes', autenticar, (req, res) => {
    const { estado } = req.query;
    let lista = solicitacoes.map(s => {
        const cliente = usuarios.find((u) => u.id === s.clienteId);
        return { ...s, nomeCliente: cliente?.nome ?? 'Desconhecido' };
    });
    if (estado) {
        lista = lista.filter(s => s.estado === estado);
    }
    res.json(lista);
});
