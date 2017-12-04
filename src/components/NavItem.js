import React from 'react'
import {Link} from 'react-router'

const NavItem = ({place}) => {
  let navData = () => {
    let name = place.charAt(0).toUpperCase() + place.slice(1),
      path = ""

    if (place !== "home") {
      path = "/" + place
    } else path = "/"

    return {path: path, name: name}
  }

  return (
    <li>
      <Link activeClassName="active" to={navData().path} onlyActiveOnIndex>
        {navData().name}
      </Link>
    </li>
  )
}

export default NavItem