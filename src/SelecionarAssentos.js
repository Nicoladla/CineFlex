import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import seta from "./img/arrow-back-outline.svg";

import AssentosDisponiveis from "./AssentosDisponíveis";
import Carregando from "./CarregarPagina";

export default function SelecionarAssentos(props) {
  const {
    nome,
    setNome,
    cpf,
    setCpf,
    setnumeroAssentoEscolhido,
    numeroAssentoEscolhido,
  } = props;

  const { idSessao } = useParams();
  const urlAssentos = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
  const navegaçao = useNavigate();

  const [idAssentosEscolhidos, setIdAssentosEscolhidos] = useState([]);
  const [assentos, setAssentos] = useState(null);
  const [msgDeCampoInvalido, setMsgDeCampoInvalido] = useState("");

  useEffect(() => {
    const promessa = axios.get(urlAssentos);

    promessa.then((res) => setAssentos(res.data));
    promessa.catch((erro) => console.log(erro.response.data));
  }, []);

  function ReservarAssentos(event) {
    event.preventDefault();

    const temAssentoSelecionado = idAssentosEscolhidos.length !== 0;
    const OcpfEValido = cpf.length === 11;

    if (!OcpfEValido) {
      return setMsgDeCampoInvalido(
        <CPFinvalido>Digite um CPF válido.</CPFinvalido>
      );
    }

    if (!temAssentoSelecionado) {
      return setMsgDeCampoInvalido(
        <SemAssento>Você precisa escolher no mínimo um assento!</SemAssento>
      );
    }

    const urlPost =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

    const descriçãoDaReserva = {
      ids: idAssentosEscolhidos,
      name: nome,
      cpf: cpf,
    };

    const promessa = axios.post(urlPost, descriçãoDaReserva);

    promessa.then((res) => navegaçao(`/sucesso/${idSessao}`));
    promessa.catch((erro) => console.log(erro.response.data));
  }

  if (assentos === null) {
    return <Carregando />;
  }

  return (
    <>
      <Link to={-1}>
        <BotaoVoltar src={seta} alt="icone" />
      </Link>
      <Titulo>Selecione o(s) assento(s)</Titulo>

      <AssentosDisponiveis
        assentos={assentos.seats}
        idAssentosEscolhidos={idAssentosEscolhidos}
        setIdAssentosEscolhidos={setIdAssentosEscolhidos}
        setnumeroAssentoEscolhido={setnumeroAssentoEscolhido}
        numeroAssentoEscolhido={numeroAssentoEscolhido}
      />

      <Form onSubmit={ReservarAssentos}>
        <label htmlFor="nome">Nome do comprador:</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          required
          data-identifier="buyer-name-input"
        />

        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          id="cpf"
          type="number"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          required
          data-identifier="buyer-cpf-input"
        />

        <div>{msgDeCampoInvalido}</div>

        <EscolherAcento>
          <button type="submit" data-identifier="reservation-btn">
            Reservar assento(s)
          </button>
        </EscolherAcento>
      </Form>

      <FilmeSelecionado>
        <img src={assentos.movie.posterURL} alt="filme" />
        <div>
          <p data-identifier="movie-and-session-infos-preview">
            {assentos.movie.title}
          </p>
          <p data-identifier="movie-and-session-infos-preview">
            {assentos.day.weekday} - {assentos.name}
          </p>
        </div>
      </FilmeSelecionado>
    </>
  );
}

const Titulo = styled.h2`
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
  padding-right: 10px;
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
  div {
    height: 89px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
  }
  p:last-child {
    color: #7f7f7f;
  }
`;

const CPFinvalido = styled.p`
  color: red;
  font-size: 15px;
  margin-top: -10px;
  margin-left: 5px;
`;

const SemAssento = styled.p`
  color: gray;
  text-align: center;
  font-size: 15px;
  margin: 10px 0 -15px;
`;

const BotaoVoltar = styled.img`
  width: 30px;
  background-color: #6a8aaa;
  color: #e8833a;
  border-radius: 100%;
  position: fixed;
  top: 20px;
  left: 15px;
  z-index: 2;
`;
