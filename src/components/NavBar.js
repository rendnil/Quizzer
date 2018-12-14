import React from "react"
import {NavLink } from 'react-router-dom';
import {Menu, Icon, Button} from "semantic-ui-react"


const NavBar = (props) => {

  //generate different navbar options and links
  return(
    <Menu>

      {/* display the site name w/icon */}
      <Menu.Item header>
        <Icon name="question" size="large" color="green" style={{ marginRight: '1.5em' }} />
        <NavLink to = "/">
        Quizzer
        </NavLink>
       </Menu.Item>

       {/* link to news page */}
      <Menu.Item>
        <NavLink  to = "/"
        style={{textDecoration: "none"}}>
        Categories
        </NavLink>
      </Menu.Item>

    </Menu>
  )
}



export default NavBar
