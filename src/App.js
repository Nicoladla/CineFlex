import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import seta from "./img/arrow-back-outline.svg";

import Filmes from "./Filmes";
import Sessoes from "./Sessões";
import SelecionarAssentos from "./SelecionarAssentos";
import Tela_Sucesso from "./Tela_Sucesso";

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroAssentoEscolhido, setnumeroAssentoEscolhido] = useState([]);
  const [podeMostrarBotaoVoltar, setPodeMostrarBotaoVoltar] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo podeMostrarBotaoVoltar={podeMostrarBotaoVoltar}>
        <Link to={-1}>
          <img src={seta} alt="icone" />
        </Link>
        <h1>CINEFLEX</h1>
      </Logo>

      <Routes>
        <Route
          path="/"
          element={
            <Filmes setPodeMostrarBotaoVoltar={setPodeMostrarBotaoVoltar} />
          }
        />
        <Route
          path="/sessoes/:idFilme"
          element={
            <Sessoes setPodeMostrarBotaoVoltar={setPodeMostrarBotaoVoltar} />
          }
        />
        <Route
          path="/assentos/:idSessao"
          element={
            <SelecionarAssentos
              nome={nome}
              setNome={setNome}
              cpf={cpf}
              setCpf={setCpf}
              setnumeroAssentoEscolhido={setnumeroAssentoEscolhido}
              numeroAssentoEscolhido={numeroAssentoEscolhido}
            />
          }
        />
        <Route
          path="/sucesso/:resultado"
          element={
            <Tela_Sucesso
              nome={nome}
              cpf={cpf}
              numeroAssentoEscolhido={numeroAssentoEscolhido}
              setPodeMostrarBotaoVoltar={setPodeMostrarBotaoVoltar}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Logo = styled.header`
  background-color: #c3cfd9;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 30px;
    background-color: #6a8aaa;
    color: #e8833a;
    border-radius: 100%;
    display: ${({ podeMostrarBotaoVoltar }) =>
      !podeMostrarBotaoVoltar ? "none" : "inline"};
    position: absolute;
    top: 20px;
    left: 15px;
  }

  h1 {
    color: #e8833a;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 34px;
  }
`;
