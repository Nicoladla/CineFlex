import styled from "styled-components";

import AssentosDisponiveis from "./AssentosDisponíveis";

export default function SelecionarAssentos() {
  return (
    <>
      <Titulo>Selecione o(s) assento(s)</Titulo>

      <AssentosDisponiveis />

      <Form>
        <label htmlFor="nome">Nome do comprador:</label>
        <input id="nome" type="text" placeholder="Digite seu nome..." />

        <label htmlFor="cpf">CPF do comprador:</label>
        <input id="cpf" type="number" placeholder="Digite seu CPF..." />

        <EscolherAcento>
          <button type="submit">Reservar assento(s)</button>
        </EscolherAcento>
      </Form>

      <FilmeSelecionado>
        <img
          src="https://3.bp.blogspot.com/-Xk26CEGNSr8/UsbcAl8KM5I/AAAAAAAAPuU/un80T1-R3ns/s1600/O_hobbit.jpg"
          alt="filme"
        />
        <p>
          Hobbit <br /> Quinta-feira - 15:00
        </p>
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

const EscolherAcento = styled.div`
  text-align: center;

  button {
    background: #e8833a;
    color: white;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border: none;
    margin: 40px 0 140px;
    font-size: 18px;
  }
`;

const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 18px;
  }

  input {
    width: 100%;
    height: 51px;
    margin-bottom: 15px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    outline: none;
  }

  input::placeholder {
    color: #afafaf;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
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
    line-height: 30px;
  }
`;
