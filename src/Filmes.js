import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Filmes() {

    return (
        <>
            <Titulo>Selecione o filme</Titulo>
            <OpcoesDeFilmes>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://3.bp.blogspot.com/-Xk26CEGNSr8/UsbcAl8KM5I/AAAAAAAAPuU/un80T1-R3ns/s1600/O_hobbit.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
                <li><img src="https://i.pinimg.com/236x/62/a9/76/62a976dbffd55a775bf64b92e7210e1e--lord-of-war-the-lord.jpg" alt="filme"/></li>
            </OpcoesDeFilmes>
        </>
    )
}

const Titulo=styled.h1`
    margin: 107px 0 40px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
`

const OpcoesDeFilmes=styled.ul`
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li{
        background-color: white;
        padding: 8px;
        margin-bottom: 11px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    img{
        width: 145px;
        height: 209px;
    }
`