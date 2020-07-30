import React from 'react';
import RichText from "../components/RichText"
import styled from 'styled-components'
import "./layout.css"


const HeroWrapper = styled.section`
  background: url('${props => props.backgroundImage}');
  height: calc(100vh - 113px);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  div{
    max-width: 900px;
    margin: 0 auto;

  }
  h1 {
    font-weight: bold;
  }
  p {
    font-size: 24px;
  }
`
const CTAButton = styled.button`
  border: red solid 2px;
  padding: 1rem 4.5rem;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  transition: .7s;
  text-transform: uppercase;

  &:hover {
    background-color: red !important;
    color: white !important;
  }
`

const Hero = ({ title, content, backgroundImage }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <RichText render={title}></RichText>
        <p>{content}</p>
        <CTAButton className="button" size="lg">Learn More</CTAButton>
      </div>
    </HeroWrapper>
  )
}
export default Hero;