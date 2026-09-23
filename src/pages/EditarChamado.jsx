import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function EditarChamado({ chamados, aoAlterar }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const chamadoEncontrado = chamados.find(
        (chamado) => chamado.id === Number(id)
    )

    const [titulo, setTitulo] = useState(chamadoEncontrado?.titulo ?? '')
    const [descricao, setDescricao] = useState(chamadoEncontrado?.descricao ?? '')
    const [prioridade, setPrioridade] = useState(
        chamadoEncontrado?.prioridade ?? ''
    )
    const [solicitante, setSolicitante] = useState(chamadoEncontrado?.solicitante ??
        '')
    const [status, setStatus] = useState(chamadoEncontrado?.status ??
        '')

    const [mensagemSucesso, setMensagemSucesso] = useState('')
    function alterarChamado(evento) {
        evento.preventDefault()
        const chamadoAtualizado = {
            id: Number(id),
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            prioridade: Number(prioridade),
            solicitante: solicitante.trim(),
            status: status.trim(),
        }


        aoAlterar(chamadoAtualizado)
        alert('Chamado alterado com sucesso!')
        navigate('/chamados/listar')
    }
    if (!chamadoEncontrado) {
        return (
            <main className="pagina-chamados">
                <h1>Chamado não encontrado</h1>
                <Link to="/chamados/listar">
                    Voltar para a lista de chamados

                </Link>
            </main>
        )
    }
    return (
        <main className="pagina-chamados">
            <h1>Alterar chamado</h1>
            <form
                className="formulario-chamado"
                onSubmit={alterarChamado}
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
                    Salvar alterações
                </button>
            </form>
            <Link to="/chamados/listar">
                Voltar para a lista de chamados
            </Link>
        </main>

    )
}
export default EditarChamado