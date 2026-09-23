const chamadosIniciais = [
  {
    id: Date.now(),
    titulo: 'Computador não inicia',
    descricao: 'Computador do laboratório não liga.',
    prioridade: 2,
    solicitante: 'Maria Silva',
    status: 'ABERTO',
  },
  {
    id: Date.now() + 1,
    titulo: 'Internet indisponível',
    descricao: 'O computador do setor financeiro está sem acesso à internet.',
    prioridade: 1,
    solicitante: 'João Santos',
    status: 'EM_ANDAMENTO',
  },
  {
    id: Date.now() + 2,
    titulo: 'Impressora não funciona',
    descricao: 'A impressora do escritório não está imprimindo os documentos.',
    prioridade: 3,
    solicitante: 'Ana Oliveira',
    status: 'FECHADO',
  },
]

export default chamadosIniciais
