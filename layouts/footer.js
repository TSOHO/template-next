import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className='global-footer'>
        © h.yingzi
        <style jsx>{`
            .global-footer{
                font-size:12px;
                color:#666;
                border-top:1px solid #ddd;
            }
        `}</style>
      </div>
    )
  }
}

export default Footer
