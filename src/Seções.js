import styled from "styled-components";

export default function Seçoes() {
  return (
    <>
      <Titulo>Selecione o horário</Titulo>
      <Sessao>
        <h2>Quinta-feira - 24/06/2021</h2>
        <button>15:00</button>
        <button>15:00</button>
      </Sessao>
      <Sessao>
        <h2>Quinta-feira - 24/06/2021</h2>
        <button>15:00</button>
        <button>15:00</button>
      </Sessao>

      <FilmeSelecionado>
        <img
          src="https://3.bp.blogspot.com/-Xk26CEGNSr8/UsbcAl8KM5I/AAAAAAAAPuU/un80T1-R3ns/s1600/O_hobbit.jpg"
          alt="filme"
        />
        <p>Hobbit</p>
      </FilmeSelecionado>
    </>
  );
}

const Titulo = styled.h1`
  margin: 107px 0 40px;
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
`;

const Sessao = styled.section`
  margin: 0 0 23px 23px;

  h2 {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 22px;
  }

  button {
    background: #e8833a;
    color: white;
    width: 83px;
    height: 43px;
    border-radius: 3px;
    border: none;
    margin-right: 8px;
  }
`;

const FilmeSelecionado = styled.footer`
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  img {
    width: 64px;
    height: 89px;
    margin: 0 14px 0 10px;
    border: 8px solid white;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
  }
`;
