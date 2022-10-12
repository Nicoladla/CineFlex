import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Carregando from "./CarregarPagina";

export default function Filmes({setPodeMostrarBotaoVoltar}) {
  const urlFilmes = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

  const [filmes, setFilmes] = useState(null);

  setPodeMostrarBotaoVoltar(false)

  useEffect(() => {
    const promessa = axios.get(urlFilmes);

    promessa.then((res) => setFilmes(res.data));
    promessa.catch((erro) => console.log(erro.response.data));
  }, []);

  if (filmes === null) {
    return <Carregando />;
  }

  return (
    <>
      <Titulo>Selecione o filme</Titulo>
      <OpcoesDeFilmes>
        {filmes.map((filme) => (
          <Link to={`/sessoes/${filme.id}`} key={filme.id}>
            <li data-identifier="movie-outdoor">
              <img src={filme.posterURL} alt="filme" />
            </li>
          </Link>
        ))}
      </OpcoesDeFilmes>
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

const OpcoesDeFilmes = styled.ul`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  li {
    background-color: white;
    padding: 8px;
    margin-bottom: 11px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  img {
    width: 145px;
    height: 209px;
  }
`;
