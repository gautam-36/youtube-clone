import React from 'react'
import "./_header.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header ">
            <FaBars
                className="header__menu"
                size={26}
                onClick={() => handleToggleSidebar()}
            />
            <div className="mainLogo">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="logo" className="header__logo" />
                <span className="logoName">YouTube</span>
            </div>
            {/* {<span className="__logoName">YouTube</span>  logo of youtube} */}
            <form><input type="text" placeholder='search' /><button type='submit'>
                <AiOutlineSearch size={22} />
            </button></form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://lh3.googleusercontent.com/a/AGNmyxbY8YqlLBbFNpXsftgDKeCXVa86Stw1gOr3niz0pA=s96-c" alt="Avatar" />
            </div>
        </div>
    )
}

export default Header