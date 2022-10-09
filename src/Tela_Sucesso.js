import styled from "styled-components"

export default function Tela_Sucesso() {
    return (
        <Titulo>Pedido feito com sucesso!</Titulo>
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