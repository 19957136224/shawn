import React from 'react'
import logo from '../../assets/logo.png'
import './index.less'

export default () => {
  return <div className="logo-wrapper-style">
    <img src={logo} alt=""  style={{ width: '100px', height: '100px'}} />
  </div>
}