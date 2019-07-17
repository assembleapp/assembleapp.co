import React from "react"
import styled from "styled-components"
import Logo from "./components/Logo.js"

function App() {
  return (
    <Layout>
      <Logo />

      <div>
        <Title>Assemble。</Title>
        <Caption>Symbols to keep people moving。</Caption>
      </div>

      <Words>
        {// TODO Time
        }

        <Time>2019.07.16 pacific 18:32</Time>
        <Paragraph>
          1/2 cup water traded for 1 Chinese RMB

          at Mission Hunan Restaurant in San Francisco。
        </Paragraph>
      </Words>

      <Words>
        <Paragraph>
          This post serves to deprecate the conception
          of "networked technologies", circa 2019.05.19,
          as grounded with respect to sound economics。
        </Paragraph>

        <Paragraph>
          No mitigation strategy yet exists。
        </Paragraph>
      </Words>
    </Layout>
  );
}

const Layout = styled.div`
font-size: 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  padding: 1rem;
  background-color:  #8d9bd5;
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

const Words = styled.div`
  grid-column: 2;
`

const Paragraph = styled.p`
  white-space: pre-wrap;
`

const Time = styled.span`
`

export default App;
