import React, { Component } from 'react'
import Nav from '../layouts/nav'

var iconBlog = require('../static/logo.svg')

class Header extends Component {
  render () {
    return (
      <div className='global-header clearfix'>
        <img src={iconBlog} alt='logo' />
        <Nav />
        <style jsx>{`
            .global-header{
                padding-left:20px;
                background-color:#ddd;
            }
            .global-header img{
                width:30px;
                float:left;
                margin-right:40px;
                margin-top:12px;
            }
        `}</style>
      </div>
    )
  }
}

export default Header
