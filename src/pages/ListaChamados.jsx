import { Link } from 'react-router'

function ListaChamados({ chamados }) {
    return (
        <main className="pagina">
            <h1>Lista de Chamados</h1>

            <ul className="lista">
                {chamados.map((chamado) => (
                    <li key={chamado.id}>
                        <div className="info-chamado">
                            <strong>{chamado.titulo} - ID: {chamado.id}</strong>
                            <span>Descrição: {chamado.descricao} </span>
                            <span>Prioridade: {chamado.prioridade} </span>
                            <span>solicitante: {chamado.solicitante} </span>
                            <span>status: {chamado.status} </span>

                        </div>

                        <div className="acoes-chamado">
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