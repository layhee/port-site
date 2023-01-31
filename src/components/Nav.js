import React, { useState } from "react"
import { FaRegSmile, FaCog, FaLaptopCode, FaRegHandSpock, FaBars, FaRegTimesCircle } from "react-icons/fa"

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
                <FaRegHandSpock className="fa-beat"/><a href="#intro">Hello</a>
            </li>
            <li>
               <FaCog className="fa-spin"/>  <a href="#skills">Skills</a>
            </li>
            <li>
                <FaLaptopCode className="fa-beat"/> <a href="#work">Work</a>
            </li>
            <li>
                <FaRegSmile className="fa-spin"/><a href="#about"> About</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav