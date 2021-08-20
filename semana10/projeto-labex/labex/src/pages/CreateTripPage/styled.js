import styled from "styled-components";

export const CreatePage = styled.div`
  /* height: 800px;
  display: flex;
  align-items: center;
  justify-content: center; */

   h1{
     margin: 40px;
     display: flex;
     justify-content: center;
     text-align: end;
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

  input{
  
     display: block;
     display: flex;
     justify-content: center;
     width: 500px;
     height: 30px;
     border-radius: 10px;
     padding: 4px 8px;
     border-width: 1px;
     border-color: gray;
     margin: 0 0 15px 0;
  }


`

