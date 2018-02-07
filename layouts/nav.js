import React, { Component } from 'react'
import ActiveLink from '../components/activeLink'

class Nav extends Component {
  static getInitialProps ({pathname}) {
    return {wwwwwwww: 'asdkjlhkajshd'}
  }
  constructor (props) {
    super(props)

    this.state = {
      list: [{
        name: '首页',
        url: '/',
        isActive: false
      }, {
        name: '关于',
        url: '/about',
        isActive: false
      }]
    }
  }

  render () {
    const {list} = this.state

    return (
      <div className='global-nav'>
        <ul>
          {list.map((item, index) => <li key={index}>
            <ActiveLink href={item.url}>
              {item.name}
            </ActiveLink>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Nav
