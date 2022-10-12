import styled from "styled-components";

export default function Logo() {
  return (
    <Header >
      <h1>CINEFLEX</h1>
    </Header>
  );
}

const Header = styled.header`
  background-color: #c3cfd9;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    color: #e8833a;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 34px;
  }
`;
