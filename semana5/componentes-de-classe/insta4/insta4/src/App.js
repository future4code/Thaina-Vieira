import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import fotocarla from './mulherdesenho.jpg'
import postcarla from './paisagemum.jpg'
import fotojoao from './homemdesenho.png'
import postjoao from './paisagemdois.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Carla'}
          fotoUsuario={fotocarla}
          fotoPost={postcarla}
        />

       <Post
          nomeUsuario={'João'}
          fotoUsuario={fotojoao}
          fotoPost={postjoao}
        />
      </MainContainer>
    );
  }
}


export default App;
