import React from "react"
import {NavLink } from 'react-router-dom';
import {Menu} from "semantic-ui-react"


const NavBar = (props) => {
  //generate different navbar options and links
  return(
    <Menu inverted borderless color="green">

      {/* display the site name*/}
      <Menu.Item fitted="vertically" id="navbar-header">
        <NavLink to = "/">Quizzer</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
