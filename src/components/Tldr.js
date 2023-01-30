import React from 'react'
import { useState } from 'react'

const Tldr = () => {
    const [btnState, setBtnState] = useState(false)
    function handleClick(){
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? ' active' : ''

  return (
    <button className={`btn${toggleClassCheck}`} onClick={handleClick}>TLDR</button>
  )
}

export default Tldr