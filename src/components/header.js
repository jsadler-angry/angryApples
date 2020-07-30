import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import companyLogo from '../../static/aa_logoSq.png'
import companyLogoText from '../../static/AA_logo_txt.png'

const NavLink = styled.div`
  margin: auto 0;
  a{
    color: white;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;

    &:hover{
      color: red;
    }
  }
`;
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;

`

const HeaderWrapper = styled.header`
  display: flex;
  background: black;
  height: 113px;
  padding: 0 2rem;
  box-sizing: border-box;
`
const Branding = styled.div`
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin: auto 0;
`
const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}
`
const AngryLogo = () => <img class="aamLogo" alt="Angry Apples Marketing Homepage" src={companyLogo} />
const AngryLogoText = () => <img class="aamLogoText" alt="" src={companyLogoText} />
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <StaticQuery
          query={navigationQuery}
          render={(data) => {
            console.log(data);
            return (
              <>
                <Branding>
                  <a href="/">
                    <AngryLogo />
                    <AngryLogoText />
                  </a>

                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                    return (<NavLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>
                        {link.label}
                      </Link>
                    </NavLink>
                    )
                  })}
                </NavLinks>
              </>
            )
          }}
        />
      </HeaderWrapper>
    </>
  )
}

export default Header
