import styled from "styled-components"
import React from "react";

// Eighties colors
const face_colors = [
  "#6699cc", // Blue
  "#cc99cc", // Purple
  "#99cc99", // Green
  "#ffcc66", // Yellow
  "#f2777a", // Red
  "#f99157", // Orange
]

const depth = 33;

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: -30,
      y: -45,
      z: 0,
    }
  }

  render() {
    let { x, y, z } = this.state;

    return (
      <OuterContainer>
        <Container>
          <span ref={ ref => this.container = ref } >
            <CubeOuter
              style={{
                width: `${depth}px`,
                height: `${depth}px`,
                transform: `translateX(-50%)
                scale3d(1,1,1)
                rotateX(${x}deg)
                rotateY(${y}deg)
                rotateZ(${z}deg)`
              }}>
                { this._getFaces() }
            </CubeOuter>
          </span>
        </Container>
      </OuterContainer>
    );
  }

  continuous = true
  repeatDelay = 1000

  componentDidMount() {
    if (this.continuous) {
      let lastTime = performance.now();
      let animation = () => {
        let axis = this._getRandomAxis();
        let nowTime = performance.now();
        let deltaTime = nowTime - lastTime;
        let spinAmount = Math.random() < 0.9 ? 1 : 2;
        let spinDirection = Math.random() < 0.5 ? -1 : 1;

        if (this.repeatDelay <= deltaTime) {
          let newState = this.state;
          newState[axis] = this.state[axis] + 90 * spinAmount * spinDirection;

          this.setState(newState);
          lastTime = performance.now();
        }

        this._requestAnimation = requestAnimationFrame(animation);
      };
      animation();
    }
  }

  componentWillUnmount() {
    if (this.continuous) {
      cancelAnimationFrame(this._requestAnimation);
    }
  }

  /**
   * Get all faces for a cube
   *
   * @return {array} - An array of nodes
   */
  _getFaces() {
    return [
      "rotateX(0deg)",
      "rotateX(-90deg)",
      "rotateX(90deg)",
      "rotateY(-90deg)",
      "rotateY(90deg)",
      "rotateY(180deg)"
    ].map((rotation, i) => {
      return (
        <CubeFace
          key={ i }
          style={{
            transform: `${rotation} translateZ(${ depth / 2 }px)`,
            background: face_colors[i],
          }} />
      );
    });
  }

  /**
   * Get a random axis
   *
   * @return {string} - A random axis from (y, z)
   * If we rotate along X, we end up changing the orientation of the cube.
   *
   */
  _getRandomAxis() {
    let axes = ["y", "z"]

    return axes[ Math.floor(Math.random() * axes.length) ];
  }
}

const OuterContainer = styled.div`
  height: ${depth * 1.5}px;
  width: ${depth * 2.5}px;
`

const Container = styled.span`
  display: block;
  paddingBottom: ${depth * 0.5}px;
  position: relative;
  transform-style: preserve-3d;
  width: ${depth}px;
`

const transition_timing = "1000ms";
const transition_easing = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";

const CubeOuter = styled.figure`
  -webkit-transform-style: preserve-3d;
  -webkit-transition: -webkit-transform ${transition_timing};
  display: inline-block;
  transform-style: preserve-3d;
  transition: -webkit-transform ${transition_timing} ${transition_easing};
  transition: transform ${transition_timing}, -webkit-transform ${transition_timing} ${transition_easing};
  transition: transform ${transition_timing} ${transition_easing};
`

const CubeFace = styled.section`
  background: rgba(141, 214, 249, 1);
  border-radius: 1px;
  height: 100%;
  position: absolute;
  transition-delay: 0.2s;
  transition: border-width 0.2s;
  width: 100%;
`

export default Logo;
