import React from "react"
import NavItem from "./NavItem.js"

const Nav = ({places}) => {
  return (
    <nav>
      <ul>
        {places.map((place, i) => {
          return <NavItem place={place} key={"nav" + i}/>
        })}
      </ul>
    </nav>
  )
}

export default Nav