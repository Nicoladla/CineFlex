import styled from "styled-components";
import gif from "./img/Loading_icon.gif";

export default function Carregando() {
  return (
    <Figure>
      <img src={gif} />
    </Figure>
  );
}

const Figure = styled.figure`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
