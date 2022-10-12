import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Filmes from "./Filmes";
import Sessoes from "./Sessões";
import SelecionarAssentos from "./SelecionarAssentos";
import Tela_Sucesso from "./Tela_Sucesso";
import Logo from "./Logo";

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [numeroAssentoEscolhido, setnumeroAssentoEscolhido] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />

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
          path="/sucesso/:resultado"
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
