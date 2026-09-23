import { useState } from 'react'
import { Link } from 'react-router'

function CadastroChamados({ aoCadastrar }) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [status, setStatus] = useState('')

  const [mensagemSucesso, setMensagemSucesso] = useState('')

  function cadastrarChamado(evento) {
    evento.preventDefault()

    const novoChamado = {
      id: Date.now(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      prioridade: Number(prioridade),
      solicitante: solicitante.trim(),
      status: status.trim(),
    }

    aoCadastrar(novoChamado)

    setMensagemSucesso('Chamado cadastrado com sucesso!')

    setTitulo('')
    setDescricao('')
    setPrioridade('')
    setSolicitante('')
    setStatus('')
  }

  return (
    <main className="pagina">

      <h1>Cadastrar novo chamado</h1>

      {mensagemSucesso && (
        <p className="mensagem-sucesso">
          {mensagemSucesso}
        </p>
      )}

      <form
        className="formulario"
        onSubmit={cadastrarChamado}
      >

        <label htmlFor="titulo">
          Título
        </label>

        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />


        <label htmlFor="descricao">
          Descrição
        </label>

        <textarea
          id="descricao"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />


        <label htmlFor="prioridade">
          Prioridade
        </label>

        <select
          id="prioridade"
          value={prioridade}
          onChange={(evento) => setPrioridade(evento.target.value)}
        >
          <option value="">
            Selecione a prioridade
          </option>

          <option value="1">
            1
          </option>

          <option value="2">
            2
          </option>

          <option value="3">
            3
          </option>

          <option value="4">
            4
          </option>
        </select>


        <label htmlFor="solicitante">
          Solicitante
        </label>

        <input
          id="solicitante"
          type="text"
          value={solicitante}
          onChange={(evento) => setSolicitante(evento.target.value)}
        />


        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          value={status}
          onChange={(evento) => setStatus(evento.target.value)}
        >
          <option value="">
            Selecione o status
          </option>

          <option value="Aberto">
            Aberto
          </option>

          <option value="Em andamento">
            Em andamento
          </option>

          <option value="Resolvido">
            Resolvido
          </option>

          <option value="Fechado">
            Fechado
          </option>
        </select>


        <button type="submit">
          Cadastrar chamado
        </button>

      </form>

      <Link to="/chamados">
        Voltar para Gerenciamento de Chamados
      </Link>

    </main>
  )
}

export default CadastroChamados