const usuarios = [
    {
        id: 1,
        nome: 'Maria Silva',
        email: 'maria@manuteq.com',
        senha: '1234',
        perfil: 'FUNCIONARIO',
        cpf: '854.866.700-10',
        telefone: '(46) 92812-6965',
        endereco: {
            cep: '80610-130',
            logradouro: 'Rua Acre',
            numero: '125',
            complemento: '',
            bairro: 'Água Verde',
            cidade: 'Curitiba',
            uf: 'PR'
        }
    },
    {
        id: 2,
        nome: 'Mário Santos',
        email: 'mario@manuteq.com',
        senha: '1234',
        perfil: 'FUNCIONARIO',
        cpf: '431.835.790-22',
        telefone: '(42) 92417-3453',
        endereco: {
            cep: '83505-749',
            logradouro: 'Rua Jatobá',
            numero: '205',
            complemento: '',
            bairro: 'Loteamento Chico Mendes',
            cidade: 'Almirante Tamandaré',
            uf: 'PR'
        }
    }, {
        id: 3,
        nome: 'João Oliveira',
        email: 'joao@gmail.com',
        senha: '1234',
        perfil: 'CLIENTE',
        cpf: '840.333.820-11',
        telefone: '(42) 93256-3584',
        endereco: {
            cep: '84266-260',
            logradouro: 'Rua Júlio Batista Ramos',
            numero: '225',
            complemento: '',
            bairro: 'Monte Alegre',
            cidade: 'Telêmaco Borba',
            uf: 'PR'
        }
    }, {
        id: 4,
        nome: 'José Ferreira',
        email: 'jose@gmail.com',
        senha: '1234',
        perfil: 'CLIENTE',
        cpf: '535.008.330-98',
        telefone: '(42) 92388-6809',
        endereco: {
            cep: '86813-565',
            logradouro: 'Rua General Osório',
            numero: '995',
            complemento: '',
            bairro: 'Jardim Tarobá',
            cidade: 'Apucarana',
            uf: 'PR'
        }
    }, {
        id: 5,
        nome: 'Joana Costa',
        email: 'maria@gmail.com',
        senha: '1234',
        perfil: 'CLIENTE',
        cpf: '861.210.260-06',
        telefone: '(41) 92532-6873',
        endereco: {
            cep: '84607-520',
            logradouro: 'Rua Comendador Araújo',
            numero: '665',
            complemento: '',
            bairro: 'Bom Jesus',
            cidade: 'União da Vitória',
            uf: 'PR'
        }
    }, {
        id: 6,
        nome: 'Joaquina Alves',
        email: 'joaquina@gmail.com',
        senha: '1234',
        perfil: 'CLIENTE',
        cpf: '861.210.260-06',
        telefone: '(46) 93648-3166',
        endereco: {
            cep: '87084-022',
            logradouro: 'Rua Pioneiro Jones Sales Pontes',
            numero: '349',
            complemento: '',
            bairro: 'Jardim Munique',
            cidade: 'Maringá',
            uf: 'PR'
        }
    },
];

const categorias = [
    { id: 1, nome: 'Notebook', descricao: 'Computadores portáteis' },
    { id: 2, nome: 'Desktop', descricao: 'Computadores de mesa' },
    { id: 3, nome: 'Impressora', descricao: 'Equipamentos de impressao' },
    { id: 4, nome: 'Mouse', descricao: 'Dispositivos apontadores' },
    { id: 5, nome: 'Teclado', descricao: 'Dispositivos de entrada de dados' },
];

const solicitacoes = [
    {
        id: 1,
        clienteId: 3,
        descricaoEquipamento: 'Notebook Dell Inspiron 15',
        categoria: 'Notebook',
        defeito: 'Não liga',
        estado: 'ABERTA',
        dataHoraCriacao: '2026-03-20T08:30:00.000Z',
        dataHoraFinalizacao: null,
        valorOrcamento: null,
        funcionarioId: null,
    },
    {
        id: 2,
        clienteId: 4,
        descricaoEquipamento: 'Impressora HP LaserJet',
        categoria: 'Impressora',
        defeito: 'Papel enroscado',
        estado: 'ABERTA',
        dataHoraCriacao: '2026-03-20T08:30:00.000Z',
        dataHoraFinalizacao: null,
        valorOrcamento: null,
        funcionarioId: null,
    }, {
        id: 1,
        clienteId: 3,
        descricaoEquipamento: 'Notebook Dell Inspiron 15',
        categoria: 'Notebook',
        defeito: 'Não liga',
        estado: 'ABERTA',
        dataHoraCriacao: '2026-03-20T08:30:00.000Z',
        dataHoraFinalizacao: null,
        valorOrcamento: 350.00,
        funcionarioId: 1,
    },
];

module.exports = { usuarios, categorias, solicitacoes };
