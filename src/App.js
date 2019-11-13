import React from "react"
import styled from "styled-components"
import Logo from "./components/Logo.js"

function App() {
  return (
    <Lay>
      <Logo />
      <div>
        <Title>Assemble。</Title>
        <Caption>Symbols to keep people moving。</Caption>
      </div>

      <Color slide={["#eeb580", "#eec691", "#98d58d"]} />

      <Words>
        <Time>2019.11.12 pacific 15:41</Time>
        <Post>
          Hold.
          <Schedule aim={`
          lay color slide
          `} />

          Colors used:
          <Code value={`
          #eeb580;
          #eec691;
          #98d58d;
          `} />
          and more.
        </Post>
      </Words>

      <Words>
        <Time>2019.11.11 pacific 23:56</Time>
        <Post>
          Lines for each group of words。
        </Post>
      </Words>

      <Words>
        <Time>2019.11.11 pacific 23:29</Time>
        <Post>
          Code

          <Code value={`
          way
          oh
          `} />

          Code shows properly。
        </Post>
      </Words>

      <Words>
        <Time>2019.07.16 pacific 18:32</Time>
        <Post>
          1/2 cup water traded for 1 Chinese RMB
          at Mission Hunan Restaurant in San Francisco。
        </Post>
      </Words>

      <Words>
        <Post>
          This post serves to deprecate the conception
          of "networked technologies", circa 2019.05.19,
          as grounded with respect to sound economics。
        </Post>

        <Post>
          No mitigation strategy yet exists。
        </Post>
      </Words>
    </Lay>
  );
}

const Lay = styled.div`
  background-color:  #eeb580;
  bottom: 0;
  display: grid;
  font-size: 32px;
  grid-row-gap: 4rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
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
  border-left: 8px solid rgba(0, 0, 0, 0.8);
  padding-left: 1rem;
`

const Post = styled.p`
  white-space: pre-wrap;
`

const Time = styled.span`
`

const Code = ({ value }) => (
  <Pre>
    {value}
  </Pre>
)

const Pre = styled.pre`
background-color: rgba(0, 0, 0, 0.2);
`

const Color = ({ slide }) => (
  <Slide>
    {slide.map(shade => <Swach shade={shade} />)}
  </Slide>
)

const Slide = styled.div`
display: flex;
flex-direction: row;
`

const Swach = styled.div`
height: 2rem;
width: 2rem;
bacground-color: #777888;
`

const Schedule = ({ aim }) => (
  <div>schedule: { slow(aim) }</div>
)

const slow = (words) => words

export default App;
