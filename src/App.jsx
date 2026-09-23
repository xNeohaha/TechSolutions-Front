import { useState } from 'react'

import { Routes, Route } from 'react-router'

import './App.css'

import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'
import Chamados from './pages/Chamados'
import CadastroChamados from './pages/CadastroChamados'
import ListaChamados from './pages/ListaChamados'
import EditarChamado from './pages/EditarChamado'

import chamadosIniciais from './data/chamados'

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)



  function adicionarChamado(novoChamado) {

    const chamadoComId = {

      id: Date.now(),

      ...novoChamado,

    }

    setChamados((listaAtual) => [

      ...listaAtual,

      chamadoComId,

    ])
  }
  function alterarChamado(chamadoAtualizado) {
    setChamados((listaAtual) =>
      listaAtual.map((chamado) =>
        chamado.id === chamadoAtualizado.id
          ? chamadoAtualizado
          : chamado
      )
    )
  }

  function excluirChamado(id) {

    setChamados((listaAtual) =>

      listaAtual.filter((chamado) => chamado.id !== id)

    )

  }

  const [mostrarModulos, setMostrarModulos] = useState(true)

  const [modulos] = useState([
    {
      id: 1,
      titulo: 'Gerenciamento de Chamados',
      descricao: 'Cadastre e consulte os chamados da empresa.',
      rota: '/chamados',
    },
  ])

return (
  <div className="aplicacao">

    <Cabecalho />

    <Routes>

      {/* Página inicial */}
      <Route
        path="/"
        element={
          <main className="conteudo-principal">

            <p className="introducao">
              TechSolutions Global.
            </p>

            <button
              type="button"
              className="botao-alternar"
              onClick={() => setMostrarModulos(!mostrarModulos)}
            >
              {mostrarModulos
                ? 'Ocultar módulos'
                : 'Exibir módulos'}
            </button>

            {mostrarModulos && (
              <section className="modulos">

                {modulos.map((modulo) => (
                  <CardModulo
                    key={modulo.id}
                    titulo={modulo.titulo}
                    descricao={modulo.descricao}
                    rota={modulo.rota}
                  />
                ))}

              </section>
            )}

          </main>
        }
      />

      {/* Página de chamados */}
      <Route
        path="/chamados"
        element={<Chamados />}
      />

      {/* Cadastro */}
      <Route
        path="/chamados/cadastrar"
        element={
          <CadastroChamados
            chamados={chamados}
            aoCadastrar={adicionarChamado}
          />
        }
      />

      {/* Lista */}
      <Route
        path="/chamados/listar"
        element={
          <ListaChamados
            chamados={chamados}
            aoExcluir={excluirChamado}
          />
        }
      />

      {/* Edição */}
      <Route
        path="/chamados/editar/:id"
        element={
          <EditarChamado
            chamados={chamados}
            aoAlterar={alterarChamado}
          />
        }
      />

    </Routes>

  </div>
)

}

export default App
