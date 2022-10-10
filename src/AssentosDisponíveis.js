import styled from "styled-components";

export default function AssentosDisponiveis({
  assentos,
  assentosEscolhidos,
  setAssentosEscolhidos,
}) {
  function SelecionarAssento(nomeDoAssento) {
    const assentoEstaSelecionado = assentosEscolhidos.includes(nomeDoAssento);
    let novaArray;

    if (assentoEstaSelecionado) {
      novaArray = assentosEscolhidos.filter((a) => a !== nomeDoAssento);
    } else {
      novaArray = [...assentosEscolhidos, nomeDoAssento];
    }

    setAssentosEscolhidos(novaArray);
  }

  return (
    <section>
      <OpcaoDeAssento>
        {assentos.map((a) => (
          <li key={a.id}>
            <Assento
              onClick={() => SelecionarAssento(a.name)}
              estaDisponivel={a.isAvailable}
              foiSelecionado={assentosEscolhidos.includes(a.name)}
              disabled={!a.isAvailable}
            >
              {a.name}
            </Assento>
          </li>
        ))}
      </OpcaoDeAssento>

      <StatusPossiveis>
        <div>
          <StatusCor corFundo="#1AAE9E" corBorda="#0E7D71"></StatusCor>
          <p>Selecionado</p>
        </div>
        <div>
          <StatusCor corFundo="#C3CFD9" corBorda="#7B8B99"></StatusCor>
          <p>Disponível</p>
        </div>
        <div>
          <StatusCor corFundo="#FBE192" corBorda="#F7C52B"></StatusCor>
          <p>Indisponível</p>
        </div>
      </StatusPossiveis>
    </section>
  );
}

const OpcaoDeAssento = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding-left: 7px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Assento = styled.button`
  background-color: ${({ estaDisponivel, foiSelecionado }) =>
    !estaDisponivel ? "#FBE192" : foiSelecionado ? '#1AAE9E' : "#c3cfd9"};
  color: #000000;
  width: 26px;
  height: 26px;
  margin: 0 7px 18px 0;
  font-size: 11px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ estaDisponivel, foiSelecionado }) =>
      !estaDisponivel ? "#F7C52B" : foiSelecionado ? "#0E7D71" : "#7b8b99"};
  border-radius: 100%;
`;

const StatusPossiveis = styled.aside`
  margin: 16px 0 45px;
  display: flex;
  justify-content: space-evenly;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: #4e5a65;
    margin-top: 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
`;

const StatusCor = styled.div`
  background-color: ${(props) => props.corFundo};
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => props.corBorda};
  border-radius: 100%;
`;
