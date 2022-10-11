import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Tela_Sucesso({ nome, cpf, numeroAssentoEscolhido }) {
  const navegaçao = useNavigate();

  function IrPraPaginaInicial() {
    navegaçao("/");

    window.location.reload();
  }

  return (
    <>
      <Titulo>Pedido feito com sucesso!</Titulo>

      <Informaçoes>
        <h2>Filme e sessão</h2>
        <p data-identifier="movie-session-infos-reserve-finished">
          Enola Holmes <br /> 24/06/2021 15:00
        </p>
      </Informaçoes>
      <Informaçoes>
        <h2>Ingressos</h2>
        {numeroAssentoEscolhido.map((n) => (
          <p key={n} data-identifier="seat-infos-reserve-finished">
            Assento: {n}
          </p>
        ))}
      </Informaçoes>
      <Informaçoes>
        <h2>Comprador</h2>
        <p data-identifier="buyer-infos-reserve-finished">
          Nome: {nome} <br /> CPF: {cpf}
        </p>
      </Informaçoes>

      <VoltarProHome>
        <button onClick={IrPraPaginaInicial} data-identifier="back-to-home-btn">
          Voltar pra Home
        </button>
      </VoltarProHome>
    </>
  );
}

const Titulo = styled.h1`
  color: #247a6b;
  margin: 107px 0 40px;
  text-align: center;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
`;

const Informaçoes = styled.section`
  margin: 0 0 25px 25px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
  }
`;

const VoltarProHome = styled.div`
  text-align: center;

  button {
    background: #e8833a;
    color: white;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border: none;
    margin: 70px 0 0;
    font-size: 18px;
  }
`;
