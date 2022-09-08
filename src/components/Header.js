import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' />
          <span>INICIO</span>
        </a>

        <a>
          <img src='/images/search-icon.svg' />
          <span>BUSQUEDA</span>
        </a>

        <a>
          <img src='/images/watchlist-icon.svg' />
          <span>MI LISTA</span>
        </a>

        <a>
          <img src='/images/original-icon.svg' />
          <span>ORIGINALES</span>
        </a>

        <a>
          <img src='/images/movie-icon.svg' />
          <span>PELICULAS</span>
        </a>

        <a>
          <img src='/images/series-icon.svg' />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg  src='https://i.pinimg.com/originals/58/cb/4b/58cb4b59eae65f04814da86d82b0d5f5.png'/>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 100px;
  background-color: #171A24;
  display: flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 90px;  

`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    
    img{
      height: 20px;
      padding: 0 15px;

    }

    span {
      font-size: 18px;
      font-family: sans-serif;
      font-weight: 700;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  
`

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`