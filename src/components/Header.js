import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { useSelector } from "react-redux"
import { selectCars } from "../features/car/carSlice"

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const items = useSelector(selectCars)
  console.log(items)
  return (
    <Container>
      <a href="/">
        <img alt="logo" src="images/logo.svg" />
      </a>
      <Menu>
        {items.map((item, index) => (
          <p key={index}>
            <a href="#">{item}</a>
          </p>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CustomWrapper>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: all 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`

const CustomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
