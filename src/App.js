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
  margin: 1rem;
`

const Title = styled.h1`
  margin: 0;
`

const Caption = styled.span`
  grid-column: 2;
  color: #888888;
`

export default App;
