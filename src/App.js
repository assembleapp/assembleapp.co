import React from "react"
import styled from "styled-components"
import Logo from "./components/Logo.js"

function App() {
  return (
    <Layout>
      <Logo />

      <div>
        <Title>Assemble.</Title>
        <Caption>Software to keep people moving.</Caption>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  padding: 1rem;
  background-color:  #f8b0c1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Title = styled.h1`
  margin: 0;
  color: #0b8d9c;
`

const Caption = styled.span`
  grid-column: 2;
  color: #fbf826;
`

export default App;
