import React from "react"
import {NavLink } from 'react-router-dom';
import {Menu, Icon, Button} from "semantic-ui-react"


const NavBar = (props) => {
  //generate different navbar options and links
  return(
    <Menu inverted borderless color="green">

      {/* display the site name*/}

      {/*<Menu.Item>
        <NavLink  to = "/" style={navStyle}>
          Categories
        </NavLink>
      </Menu.Item> */}
      <Menu.Item fitted="vertically" id="navbar-header">
        {/*<Icon name="question" size="large" style={{ marginRight: '1.5em' }} />*/}
        <NavLink to = "/">Quizzer</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
