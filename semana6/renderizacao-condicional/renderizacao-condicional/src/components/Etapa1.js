import React from "react"


class Etapa1 extends React.Component {
  render() {
    return (
      <div>

        <h1>ETAPA 1-DADOS GERAIS</h1>
        <p>Qual o seu nome?</p>
        <input />
        <p>Qual a sua idade?</p>
        <input />
        <p>Qual o seu email?</p>
        <input />
        <p>Qual a sua escolaridade?</p>
        <select>
          <option>Ensino Médio Completo</option>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Superior Completo</option>
          <option>Ensino Superior Incompleto</option>
        </select>
      </div>
    );
  }
}

export default Etapa1;







