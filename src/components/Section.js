import React from "react"
import styled from "styled-components"
import FadeIn from "react-fade-in"

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <FadeIn>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </FadeIn>

      <Buttons>
        <FadeIn>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
          <DownArrow src="images/down-arrow.svg" />
        </FadeIn>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  z-index: -1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`

const Buttons = styled.div``
