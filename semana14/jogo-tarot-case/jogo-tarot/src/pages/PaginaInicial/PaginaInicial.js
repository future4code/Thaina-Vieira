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
            </div>
        )
    })

    return (
        <CardContainer>
            <h1>Jogo de Tarot</h1>
            <button>Jogar</button>
            {tarot}
        </CardContainer>
    )
}

export default PaginaInicial