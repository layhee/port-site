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
    <div id="skills" className={`skills-text${toggleClassCheck}`}>
         <h1>Skills I've acquired</h1>
         <h3>My <span className="yellow">first freelance web project</span> was in <span className="yellow">2007</span> at <span className="yellow">Fruita Monument High School</span> for the release of my AP English teacher's first novel in exchange for a few <span className="yellow">Death Cab for Cutie CD</span>'s. I've loved <span className="yellow">building websites</span> ever since using the holy trinity: <span className="yellow">HTML</span>, <span className="yellow">CSS</span>, and <span className="yellow">JS </span>.</h3>
         <h3>While I was a <span className="yellow">freelancer</span> from <span className="yellow">2008 - 2014</span>, using a mix of <span className="yellow">Wordpess</span>, <span className="yellow">Drupal</span>, <span className="yellow">Joomla</span> CMS, and static sites, I also held <span className="yellow">apprenticeships</span> and <span className="yellow">internships</span> at <span className="yellow">marketing agencies</span> where I learned how to work in an <span className="yellow">agile environment</span> using <span className="yellow">scrum methodology</span>.</h3>
         <h3>After college, wanting to take a break from office work, and <span className="yellow">build something from</span> the <span className="yellow">ground up</span>, I helped co-found a <span className="yellow">bicycle courier company</span> deep-diving Intro <span className="yellow">business development</span>, <span className="yellow">building relationships</span> with clients, and most importantly, <span className="yellow">working in a fast-paced</span>, <span className="yellow">on-demand team</span>. As marketing director, I was able to use my <span className="yellow">marketing</span> and <span className="yellow">design skills</span> with <span className="yellow">Adobe Creative Suite </span>(<span className="yellow">Illustrator</span>, <span className="yellow">Photoshop</span>, <span className="yellow">Lightroom</span>, <span className="yellow">Premiere Pro</span>, <span className="yellow">After Effects</span>).</h3>
         <h3>And finally, as a student in <span className="yellow">General Assembly</span>'s <span className="yellow">Software Engineering Immersive</span> bootcamp, I've learned <span className="yellow">front end</span>, <span className="yellow">back end</span>, AKA <span className="yellow">full stack development</span> using languages, frameworks, libraries and software such as: <span className="yellow">Mongo</span>, <span className="yellow">Express.js</span>, <span className="yellow">React.js</span>, <span className="yellow">Node.js</span>, <span className="yellow">MongoDB</span>, <span className="yellow">Python</span>, <span className="yellow">Django</span>, <span className="yellow">Svelte</span>, <span className="yellow">MongoDB</span>, <span className="yellow">Tailwind CSS</span>, <span className="yellow">Firebase</span>, <span className="yellow">PostgreSQL</span>, <span className="yellow">Figma</span>, and <span className="yellow">Github.</span> </h3>
         <button className="button stay" onClick={handleClick}>Highlights, please!</button>
         <div className="next">
            <a href="#intro"><RiArrowUpCircleLine/></a><a href="#work">My Work<RiArrowDownCircleLine/></a>
        </div>
    </div>
  )
}

export default Skills