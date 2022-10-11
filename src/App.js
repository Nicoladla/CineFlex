import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Filmes from "./Filmes";
import Sessoes from "./Sessões";
import SelecionarAssentos from "./SelecionarAssentos";
import Tela_Sucesso from "./Tela_Sucesso";

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroAssentoEscolhido, setnumeroAssentoEscolhido] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo>CINEFLEX</Logo>

      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/sessoes/:idFilme" element={<Sessoes />} />
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
          path="/sucesso"
          element={
            <Tela_Sucesso
              nome={nome}
              cpf={cpf}
              numeroAssentoEscolhido={numeroAssentoEscolhido}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Logo = styled.header`
  background-color: #c3cfd9;
  color: #e8833a;
  width: 100%;
  height: 67px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;
