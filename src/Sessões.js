import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Sessoes() {
  const { idFilme } = useParams();
  const urlSessoes = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;

  const [seçoes, setSeçoes] = useState(null);

  useEffect(() => {
    const promessa = axios.get(urlSessoes);

    promessa.then((res) => setSeçoes(res.data));
    promessa.catch((erro) => console.log(erro.response.data));
  }, []);

  if (seçoes === null) {
    return <div>Carregando</div>;
  }

  return (
    <TelaSeçoes>
      <Titulo>Selecione o horário</Titulo>

      {seçoes.days.map((dia) => (
        <Sessao key={dia.id}>
          <h2 data-identifier="session-date">
            {dia.weekday} - {dia.date}
          </h2>
          <Link to={`/assentos/${dia.showtimes[0].id}`}>
            <button data-identifier="hour-minute-btn">
              {dia.showtimes[0].name}
            </button>
          </Link>
          <Link to={`/assentos/${dia.showtimes[1].id}`}>
            <button data-identifier="hour-minute-btn">
              {dia.showtimes[1].name}
            </button>
          </Link>
        </Sessao>
      ))}

      <FilmeSelecionado>
        <img
          src={seçoes.posterURL}
          alt="filme"
          data-identifier="movie-img-preview"
        />
        <p data-identifier="movie-and-session-infos-preview">{seçoes.title}</p>
      </FilmeSelecionado>
    </TelaSeçoes>
  );
}

const TelaSeçoes = styled.div`
  padding-bottom: 117px;
`;

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
    margin-right: 14px;
  }
`;
