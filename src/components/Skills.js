import React from 'react'
import { useState } from 'react'
import { RiArrowDownCircleLine, RiArrowUpCircleLine } from "react-icons/ri"

const Skills = () => {

    const [btnState, setBtnState] = useState(false)
    function handleClick(){
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? ' tldr' : ''

  return (
    <>
    <div id="skills" className={`skills-text${toggleClassCheck}`}>
         <h1>Skills I've acquired</h1>
         <h3>My <span className="yellow">first freelance web project</span> was in high school for the release of my AP English teacher's first novel in exchange for a few <span className="yellow">Death Cab for Cutie CD</span>'s. <span className="yellow">HTML</span>, <span className="yellow">CSS</span>, <span className="yellow">JS </span> & I have become very familiar.</h3>
         <h3>As a <span className="yellow">freelancer</span> from <span className="yellow">2008 - 2014</span>, I learned <span className="yellow">CMS</span>'s like <span className="yellow">Wordpress</span>, & <span className="yellow">Drupal</span>. I also held a few <span className="yellow">apprenticeships</span> at <span className="yellow">marketing agencies</span> where I learned how to work on a team using <span className="yellow">scrum</span>.</h3>

         <h3>After college, I wanted to <span className="yellow">build something from</span> the <span className="yellow">ground up</span>, so I helped co-found a <span className="yellow">bicycle courier company</span> working in a fast-paced, <span className="yellow">on-demand team</span>. As <span className="yellow">marketing director</span>, I was able to use my <span className="yellow">design skills</span> with the <span className="yellow">Adobe Creative Suite </span>.</h3>
        
         <h3>And finally, as a student in <span className="yellow">General Assembly</span>'s <span className="yellow">Software Engineering Immersive</span> bootcamp, I've learned <span className="yellow">front end</span>, <span className="yellow">back end</span>, AKA <span className="yellow">full stack development</span> using primarly the  
        <a href="https://mongoosejs.com/" rel="noreferrer" target="_blank">
          <span className="yellow"> M</span>
        </a>
          <a href="https://expressjs.com/" rel="noreferrer" target="_blank">
            <span className="yellow">E</span>
        </a>
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            <span className="yellow">R</span>
        </a>
          <a href="https://nodejs.org/en/about/" rel="noreferrer" target="_blank">
            <span className="yellow">N</span>
        </a> stack, among other technologies.</h3>
        <button className="button tldr stay" onClick={handleClick}>Highlights, please!</button>
    </div>
        <div className="next">
        <a href="#work"><RiArrowDownCircleLine/></a>
    </div>
    </>
  )
}

export default Skills