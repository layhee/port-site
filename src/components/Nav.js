import React, { useState } from "react"
import { FaRegSmile, FaCog, FaListAlt, FaRegHandSpock, FaBars, FaRegTimesCircle } from "react-icons/fa"

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
      const closeMenu = () => {
        setNavbarOpen(false)
      }
  return (
    <div className="nav">
        <button onClick={handleToggle}>{navbarOpen ? <FaRegTimesCircle className="black"/> : <FaBars/>}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} onClick={() => closeMenu()}>
            <li>
                <FaRegHandSpock className="beat"/><a href="#intro">Hello</a>
            </li>
            <li>
               <FaListAlt className="beat"/>  <a href="#skills">Skills</a>
            </li>
            <li>
                <FaCog className="spin"/> <a href="#work">Work</a>
            </li>
            <li>
                <FaRegSmile className="spin"/><a href="#about"> About</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav