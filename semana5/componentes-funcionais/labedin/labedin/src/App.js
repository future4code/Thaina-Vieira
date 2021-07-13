import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import euImagem from './eu.png';
import atendenteImagem from './atendente.jpg'
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import email from './iconeemail.jpg';
import endereco from './iconeendereco.jpg';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {euImagem} 
          nome="Thainá Rodrigues Vieira" 
          descricao="Oi, eu sou a Thainá. Sou aluna da Labenu, estou fazendo o curso de Desenvolvimento Web Full Stack"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          nome="Email" 
          descricao="thaina@gmail.com" 
        />
        
        <CardPequeno 
          imagem={endereco}
          nome="Endereço" 
          descricao="Rua Goiás" 
        />
      </div>

        <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante do curso de programação" 
        />
        
        <CardGrande 
          imagem={atendenteImagem}
          nome="Super 20 Confecções" 
          descricao="Atendente de Loja" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
