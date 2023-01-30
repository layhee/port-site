import React, { useState } from "react"


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
        <button onClick={handleToggle}>{navbarOpen ? <i className="fa-regular fa-circle-xmark black"></i> : <i className="fa-solid fa-bars"></i>}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} onClick={() => closeMenu()}>
            <li>
                <a href="#intro"><i className="fa-solid fa-burst fa-beat"></i> Intro</a>
            </li>
            <li>
                <a href="#skills"><i className="fa-solid fa-gear fa-spin"></i> Skills</a>
            </li>
            <li>
                <a href="#work"><i className="fa-solid fa-code fa-beat"></i> Work</a>
            </li>
            <li>
                <a href="#about"><i className="fa-solid fa-face-smile fa-spin"></i> About</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav