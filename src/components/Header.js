import React from "react"
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  return (
    <Container>
      <a href="/">
        <img alt="logo" src="images/logo.svg" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu></CustomMenu>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
