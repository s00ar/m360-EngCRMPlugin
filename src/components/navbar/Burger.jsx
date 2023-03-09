import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import slogo from '../../assets/logo_small.png';
import "./burger.css";

const Button = styled.button`
display: inline-block;
font-size: .8em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #45337D;
border-radius: 2rem;
display: block;
background: black;
color: white;
`;
const StyledMenu = styled.nav`
  display: flex;
  z-index: 5;
  flex-direction: column;
  justify-content: center;
  background: rgba(149,148,153,0.95);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #624D88;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #000;
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <div>
      <StyledMenu open={open}>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/"
          exact>
          <img src={slogo} onClick={() => setOpen(!open)} alt="m360-logo" />
        </NavLink>
        <Button className="nav-button">
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/services" onClick={() => setOpen(!open)}>
                Services
            </NavLink>
        </Button>
        <Button className="nav-button">
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/work" onClick={() => setOpen(!open)}>
                Work
            </NavLink>
        </Button>
        <Button className="nav-button">
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact" onClick={() => setOpen(!open)}>
                  Get in touch
          </NavLink>
        </Button>
      </StyledMenu>
    </div>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#45337D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div id="home">
      <div ref={node}>
      <NavLink
          activeClassName="is-active"
          to="/"
          exact>
            <img className="logom360-s" src={slogo} alt="m360-logo"/>
        </NavLink>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )}


export default BurgerMenu;