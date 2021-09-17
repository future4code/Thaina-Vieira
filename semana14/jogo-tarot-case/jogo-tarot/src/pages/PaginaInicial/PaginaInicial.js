import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { CardContainer } from "./styled";


const PaginaInicial = () => {

    const [cartas, setCartas] = useState([])

    const listaDeCartas = () => {
        axios.get('tarot.json')
            .then((res) => {
                setCartas(res.data.cards)

            })
            .catch((err) => {
                setCartas(err.data)
            })
    }

    useEffect(() => {

        listaDeCartas()
    }, [])

    const imagesUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/"
    const tarot = cartas.map((i) => {
        return (
            <div key={i.cards}>
                <h3>{i.name}</h3>
                <img src={`${imagesUrl}${i.image}`}></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        )
    })

    return (
        <CardContainer> 
            <button>Jogar</button>
            {tarot}
        </CardContainer>
       
           
        
    )
}

export default PaginaInicial