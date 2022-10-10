import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AssentosDisponiveis from "./AssentosDisponíveis";

export default function SelecionarAssentos() {
  const { idSessao } = useParams();
  const urlAssentos = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
  const navegaçao = useNavigate();

  const [assentos, setAssentos] = useState(null);
  const [idAssentosEscolhidos, setIdAssentosEscolhidos] = useState([]);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const promessa = axios.get(urlAssentos);

    promessa.then((res) => setAssentos(res.data));
    promessa.catch((erro) => console.log(erro.response.data));
  }, []);

  function ReservarAssentos(event) {
    event.preventDefault();

    const urlPost =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

    const descriçãoDaReserva = {
      ids: idAssentosEscolhidos,
      name: nome,
      cpf: cpf,
    };

    const promessa = axios.post(urlPost, descriçãoDaReserva);

    promessa.then((res) => navegaçao("/sucesso"));
    promessa.catch((erro) => console.log(erro.response.data));
  }

  if (assentos === null) {
    return <div>Carregando</div>;
  }

  return (
    <>
      <Titulo>Selecione o(s) assento(s)</Titulo>

      <AssentosDisponiveis
        assentos={assentos.seats}
        idAssentosEscolhidos={idAssentosEscolhidos}
        setIdAssentosEscolhidos={setIdAssentosEscolhidos}
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
        />

        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          id="cpf"
          type="number"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          required
        />

        <EscolherAcento>
          <button type="submit">Reservar assento(s)</button>
        </EscolherAcento>
      </Form>

      <FilmeSelecionado>
        <img src={assentos.movie.posterURL} alt="filme" />
        <p>
          {assentos.movie.title} <br /> {assentos.day.weekday} - {assentos.name}
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
