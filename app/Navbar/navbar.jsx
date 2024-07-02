import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
     <nav className='navbar'>
        <div className='nav-container'>
            <div className='nav-item'>
                <span className='icon'><img className='img' src="https://www.svgrepo.com/show/460814/coffee-beans-left-1.svg" alt="" /></span>
                <p className='text-1'>𝒄𝒐𝒇𝒇𝒆𝒆𝒓𝒐𝒂𝒔𝒕𝒆𝒓𝒔</p>
            </div>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <a href="">
                        {/* <span className='icon'></span> */}
                        <span className='text'></span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/">
                        <span className='icon'>🏠</span>
                        <span className='text'>ⲎⲞⲘⲈ</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="">
                        <span className='icon'>📄</span>
                        <span className='text'>ⲀⲂⲞⳘⲦ</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="">
                        <span className='icon'>📞</span>
                        <span className=''>ⲤⲞⲚⲦⲀⲤⲦ</span>
                    </a>
                </li>
            </ul>
        </div>
     </nav>
    </div>
  )
}

export default Navbar;