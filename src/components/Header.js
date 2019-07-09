import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Branding>
          Chris Patty
        </Branding>
        <Navigation>
          <ListWrapper>
            <NavItem>
              <Link to='/work'>Work</Link>
            </NavItem>
            <NavItem>
              <Link to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>Hire Me</Link>
            </NavItem>
          </ListWrapper>
        </Navigation>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const InnerWrapper = styled('div')`
  width: 100%;
  max-width: ${({theme}) => theme.maxWidth}px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
`

const Branding = styled('div')`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.headers};
  font-weight: 600;
`

const Navigation = styled('nav')`
  margin-left: auto;
`

const ListWrapper = styled('ul')`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
`

const NavItem = styled('li')`
  margin: 0px;
  padding: 0px 10px;
  a{
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }
`
