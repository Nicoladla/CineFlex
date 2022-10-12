import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Carregando from "./CarregarPagina";

export default function Tela_Sucesso(props) {
  const { nome, cpf, numeroAssentoEscolhido } = props;
  const { resultado } = useParams();
  const navegaçao = useNavigate();

  const [infosDaReserva, setInfosDaReserva] = useState(null);

  useEffect(() => {
    const promessa = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${resultado}/seats`
    );

    promessa.then((res) => setInfosDaReserva(res.data));
    promessa.catch((erro) => console.log(erro.response.data));
  }, []);

  function irPraPaginaInicial() {
    navegaçao("/");

    window.location.reload();
  }

  if (infosDaReserva === null) {
    return <Carregando />;
  }

  return (
    <>
      <Titulo>Pedido feito com sucesso!</Titulo>

      <Informaçoes>
        <h3>Filme e sessão</h3>
        <p data-identifier="movie-session-infos-reserve-finished">
          {infosDaReserva.movie.title} <br /> {infosDaReserva.day.date}{" "}
          {infosDaReserva.name}
        </p>
      </Informaçoes>
      <Informaçoes>
        <h3>Ingressos</h3>
        {numeroAssentoEscolhido.map((n) => (
          <p key={n} data-identifier="seat-infos-reserve-finished">
            Assento: {n}
          </p>
        ))}
      </Informaçoes>
      <Informaçoes>
        <h3>Comprador</h3>
        <p data-identifier="buyer-infos-reserve-finished">
          Nome: {nome} <br /> CPF: {cpf}
        </p>
      </Informaçoes>

      <VoltarProHome>
        <button onClick={irPraPaginaInicial} data-identifier="back-to-home-btn">
          Voltar pra Home
        </button>
      </VoltarProHome>
    </>
  );
}

const Titulo = styled.h2`
  color: #247a6b;
  margin: 107px 0 40px;
  text-align: center;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
`;

const Informaçoes = styled.section`
  margin: 0 0 25px 25px;

  h3 {
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
    margin: 70px 0 20px;
    font-size: 18px;
  }
`;
