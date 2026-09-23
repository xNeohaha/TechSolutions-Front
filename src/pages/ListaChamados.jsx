import { Link } from 'react-router'

function ListaChamados({ chamados, aoExcluir}) {
function confirmarExclusao(chamado) {
        const confirmacao = window.confirm(
            `Deseja realmente excluir o chamado ${chamado.nome}?`
        )
        if (confirmacao) {
            aoExcluir(chamado.id)
        }
    }

    return (
        <main className="pagina">
            <h1>Lista de Chamados</h1>

            <ul className="lista">
                {chamados.map((chamado) => (
                    <li key={chamado.id}>
                        <div className="info">
                            <strong>{chamado.titulo} - ID: {chamado.id}</strong>
                            <span> <br />
                                Descrição: {chamado.descricao} </span>
                            <span> <br />
                                Prioridade: {chamado.prioridade} </span>
                            <span> <br />
                                solicitante: {chamado.solicitante} </span>
                            <span> <br />
                                status: {chamado.status} </span>

                        </div>

                        <div className="acoes">
                            <Link
                                to={`/chamados/editar/${chamado.id}`}
                                className="botao-alterar"
                            >
                                Alterar
                            </Link>


                            <button
                                type="button"
                                className="botao-excluir"
                                onClick={() => confirmarExclusao(chamado)}
                            >
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <Link to="/chamados">
                Voltar para Gerenciamento de Chamados
            </Link>
        </main>
    )
}

export default ListaChamados