import React from 'react'
import './Header.css'
import navLogo from '../../../images/Assets/navlogo.svg'
import profile from '../../../images/Assets/profile.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={navLogo} className="header-logo"alt="" />
      <div className="name">
        Leafling
      </div>
      <img src={profile} className="header-profile"alt="" />
    </div>
  )
}

export default Header
