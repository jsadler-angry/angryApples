
import React from "react"
// import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components'
import companyLogo from '../../static/aa_logoSq.png'
import companyLogoText from '../../static/AA_logo_txt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Container, Row, Col
} from 'reactstrap';



const FooterWrapper = styled.footer`
  background: #00122C;
  a {
    color: white;
    &hover {
      color: red;
    }
  }
  
  
`
const FootTop = styled.div`
  height: 467px;
  color: white;
  display: flex;
  margin: 0 auto;
  text-align: center;
  .container {
    padding: 100px 50px;
  }
  ul {
    list-style:none;
    margin-top: 3rem;
  }
  li {
    display: inline-block;
    padding: 12px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 25px;
    box-sizing: border-box;
    width: 61px;
    height: 60px;

    &:hover {
      border-color: #FF2600;
    background-color: #FF2600;
    transition: all 0.5s ease-in-out;
    }
  }
  a {
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff !important;
    }
  }



`
const Upper = styled.div`
  border-top: 1px solid #364458;
  border-bottom: 1px solid #364458;
  height: 312px;
  margin: 0 auto;
  padding: 4rem 15rem;
  img {
    display: block;
  }
  ul {
    list-style: none;
  }
  a {
    color: white;
    &hover {
      color: red;
    }
  }
`
const FootMenu = styled.ul`
  a {
    font-size: 24px;
    font-weight: 600;
    font-family: Monserat;
  }

`
const Lower = styled.div`
  height: 103px;
  display:flex;
  color: white;

  li {
    list-style: none;
    display: inline-block;
    padding: 1rem;
    
  }
  a {
    color: white;
    &hover {
      color: red;
    }
  }
`
const Copywrite = styled.div`
  text-align: center;
  margin-top: 2rem;
`
const Address = styled.ul`
  color: white;
`
const AngryLogo = () => <img class="aamLogo" alt="Angry Apples Marketing Homepage" src={companyLogo} />
const AngryLogoText = () => <img class="aamLogoText" alt="" src={companyLogoText} />
const Footer = () => {
  return (
    <FooterWrapper>
      <FootTop>
        <Container>
          <Row>
            <Col>
              <p className="mockHead">Stay in Touch</p>
              <h2 className="sectionHead">Follow Us on Social Media</h2>
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon size="2x" icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </FootTop>
      <Upper>
        <Container>
          <Row>
            <Col>
              <AngryLogo />
              <AngryLogoText />
            </Col>
            <Col>
              <Address>
                <li><h5>Get in Touch with us</h5></li>
                <li>55-59 Chrystie Street, Suite 208, New York, NY 10002</li>
                <li>
                  <a href="email:hello@goangry">hello@goangry</a>
                </li>
                <li>
                  <a href="tel:2125550044">212 555 0044</a>
                </li>
              </Address>
            </Col>
            <Col>
              <FootMenu className="text-center">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Leadership</a></li>
              </FootMenu>            </Col>
            <Col>
              <FootMenu className="text-center">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Legal Info</a></li>
              </FootMenu>
            </Col>
          </Row>
        </Container>
      </Upper>
      <Lower>
        <Container>
          <Row>
            <Col>
              <ul className="text-center">
                <li><a href="">Security</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Terms of Service</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* <Copywrite>
          © {new Date().getFullYear()}, Built with{` `}
        </Copywrite> */}
      </Lower>

    </FooterWrapper>
  )
}

export default Footer