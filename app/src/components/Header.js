import React from 'react'
import {Link} from 'react-router'
import Nav from "./Nav.js"

const Header = () => {
  return (
    <header>
      <section className="wrap">
        <h1>
          <Link to="/">
            The Light of Other Days
            <br />
            <span className="divider"> | </span>
            <span className="tagline">Solas ó Ré Eile</span>
            <span className="divider"> | </span>
            <br />
            Jim Maginn
          </Link>
        </h1>
        <Nav places={['home', 'gallery', 'contact']}/>
      </section>
    </header>
  )
}


export default Header