import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li` //passo 6: o componente tarefa é uma li
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')}; //passo7: o ternário está ali -> (completa ? 'line-through' : 'none'), onde completa? é a condição. Se 'completa' for verdadeiro o texto vai ser riscado, e para isso acontecer tem que usar o 'line-through' Se não for não vai acontecer nada, essa é a função do 'none'::after.
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false 
        },
        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: true 
        }
      ],
      inputValue: '',
      filtro: '' // passo 4: quando coloco "pendentes" dentro do filtro só mostra a tarefa que está com o 'false'(porque está pendente)dentro do state-> completa:false. Quando coloco "completas" aparece só a tarefa que está como 'true' dentro do state-> completa:true.

    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {

  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => { //passo 5: a listaFiltrada vai lá no state "entra" no array de tarefas e faz o filtro. Usando switch case o filtro filtra as tarefas, se a tarefa for 'pendente' vai retorna a tarefa que não esta completa e se for 'completas'vai retornar a tarefa que ja foi completa.

      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa} //passo 6
                onClick={() => this.selectTarefa(tarefa.id)} //passo 8: o onClick é uma prop que está passando para dentro do componente <tarefa> essa função selectTarefa
                
              >{tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
