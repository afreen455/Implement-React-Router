import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
 import {mockFile} from './Mock'
export default class Navbar extends Component {
  render() {
    return (
        <header>
            <div className='logo'>
            <NavLink to='#'>  # MPHASIS </NavLink>   
            </div>
           
      <nav>
          <ul>
              {
                  mockFile.map((item,i)=>{
                    return(
                        <li key={i}>
                        <NavLink className='link' to={item.path}>{item.name}</NavLink>
                      </li>
                    )
                  })
              }
              {/* <li>
                  <NavLink to='/Home'>Home</NavLink>
                </li>
              <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              <li>
                  <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                  <NavLink to='/contacts'>Contacts</NavLink>
                </li> */}

          </ul>
      </nav>
      </header>
    )
  }
}
