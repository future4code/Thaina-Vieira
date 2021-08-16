import React from "react"
import {HomePage} from './pages/HomePage'
import styled from "styled-components"

export const PaginaInicial = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

   h1{
     margin: 40px;
     display: flex;
     justify-content: center;
   }

   button{
     border-radius: 10px;
     margin: 15px;
     padding: 15px;
     cursor: pointer;
     line-height: 10px;
     color: #FFFF;
     background-color: darkcyan;
   }
   button:hover	{
			position: relative;
			top: 1px;
			left: 1px;
      border-color: #36b597;
      background: #36b597;
			}
`


function App() {
  return (
    <PaginaInicial>
      < HomePage />
     
    </PaginaInicial>
  );
}

export default App;
