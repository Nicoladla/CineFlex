import styled from "styled-components"

export default function Tela_Sucesso() {
    return (
        <>
            <Titulo>Pedido feito com sucesso!</Titulo>

            <Informaçoes>
                <h2>Filme e sessão</h2>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </Informaçoes>
            <Informaçoes>
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </Informaçoes>
            <Informaçoes>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Informaçoes>

            <VoltarProHome>
                <button>Voltar pra Home</button>
            </VoltarProHome>
        </>
    )
}

const Titulo = styled.h1`
    color: #247A6B;
    margin: 107px 0 40px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
`

const Informaçoes= styled.section`
    margin: 0 0 25px 25px;

    h2{
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 10px;
    }

    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`

const VoltarProHome= styled.div`
    text-align: center;

    button{
        background: #E8833A;
        color: white;
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border: none;
        margin: 70px 0 0;
        font-size: 18px;
    }
`