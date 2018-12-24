import React from "react"
import {NavLink } from 'react-router-dom';
import {Menu, Icon, Button} from "semantic-ui-react"


const NavBar = (props) => {
  const navStyle={
    color:"white"
  }
  //generate different navbar options and links
  return(
    <Menu inverted color="green">

      {/* display the site name w/icon */}
      <Menu.Item header>
        {/*<Icon name="question" size="large" style={{ marginRight: '1.5em' }} />*/}
        <NavLink style={navStyle} to = "/">
          Quizzer
        </NavLink>
       </Menu.Item>

      <Menu.Item>
        <NavLink  to = "/" style={navStyle}>
          Categories
        </NavLink>
      </Menu.Item>

    </Menu>
  )
}



export default NavBar
