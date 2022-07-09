import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>PERSONAL DIARY</div>
      <div className='header_right'>
      <Link to='/'>HOME</Link>
        <Link to='/signup'>SIGNUP</Link>
        <Link to='/login'>LOGIN</Link>
      </div>
    </div>
  )
}

export default Header