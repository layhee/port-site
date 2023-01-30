import React from 'react'
import { useState } from 'react'

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
         <h3>While I was a <span className="yellow">freelancer</span> from <span className="yellow">2008 - 2014</span>, using a mix of <span className="yellow">Wordpess</span>, <span className="yellow">Drupal</span>, <span className="yellow">Joomla</span> CMS, and static sites, I also had apprenticeships and internships at <span className="yellow">marketing agencies</span> where I learned how to work in an <span className="yellow">agile environment</span> using <span className="yellow">scrum methodology</span>.</h3>
         <h3>After college, wanting to take a break from office work, and <span className="yellow">build something from the ground up</span>, I helped co-found a <span className="yellow">bicycle courier company</span> deep-diving Intro <span className="yellow">business development</span>, building relationships with clients, and most importantly, <span className="yellow">working in a fast-paced</span>, <span className="yellow">on-demand team</span>. As marketing director, I was able to use my <span className="yellow">marketing</span> and <span className="yellow">design skills</span> with <span className="yellow">Adobe Creative Suite </span>(<span className="yellow">Illustrator</span>, <span className="yellow">Photoshop</span>, <span className="yellow">Lightroom</span>, <span className="yellow">Premiere Pro</span>, <span className="yellow">After Effects</span>).</h3>
         <h3>And finally, as a student in <span className="yellow">General Assembly</span>'s <span className="yellow">Software Engineering Immersive</span> bootcamp, I've learned <span className="yellow">full stack development</span> using languages, frameworks, libraries and software such as: <span className="yellow">Mongo</span>, <span className="yellow">Express.js</span>, <span className="yellow">React.js</span>, <span className="yellow">Node.js</span>, <span className="yellow">MongoDB</span>, <span className="yellow">Python</span>, <span className="yellow">Django</span>, <span className="yellow">Svelte</span>, <span className="yellow">MongoDB</span>, <span className="yellow">Tailwind CSS</span>, <span className="yellow">Firebase</span>, <span className="yellow">PostgreSQL</span>, <span className="yellow">Figma</span></h3>
         <button className="button stay" onClick={handleClick}>TLDR</button>
            {/* <div className="skills-icons">
                <img alt="react" src="https://skillicons.dev/icons?i=react" />
                <img alt="express" src="https://skillicons.dev/icons?i=express" />
                <img alt="mongodb" src="https://skillicons.dev/icons?i=mongodb" />
                <img alt="node" src="https://skillicons.dev/icons?i=nodejs" />
                <img alt="heroku" src="https://skillicons.dev/icons?i=heroku" />
                <img alt="firebase" src="https://skillicons.dev/icons?i=firebase" />
                <img alt="javascript" src="https://skillicons.dev/icons?i=js" />
                <img alt="javascript" src="https://skillicons.dev/icons?i=py" />
                <img alt="javascript" src="https://skillicons.dev/icons?i=jquery" />
                <img alt="javascript" src="https://skillicons.dev/icons?i=sass" />
                <img alt="javascript" src="https://skillicons.dev/icons?i=svg" />
                <img alt="photoshop" src="https://skillicons.dev/icons?i=processing" />
                <img alt="html" src="https://skillicons.dev/icons?i=html" />
                <img alt="css" src="https://skillicons.dev/icons?i=css" />
                <img alt="git" src="https://skillicons.dev/icons?i=git" />
                <img alt="bootstrap" src="https://skillicons.dev/icons?i=bootstrap" />
                <img alt="tailwind" src="https://skillicons.dev/icons?i=tailwind" />
                <img alt="tailwind" src="https://skillicons.dev/icons?i=vscode" />
                <img alt="tailwind" src="https://skillicons.dev/icons?i=wordpress" />
                <img alt="figma" src="https://skillicons.dev/icons?i=figma" />
                <img alt="illustrator" src="https://skillicons.dev/icons?i=illustrator" />
                <img alt="photoshop" src="https://skillicons.dev/icons?i=photoshop" />
                <img alt="photoshop" src="https://skillicons.dev/icons?i=pr" />
                <img alt="photoshop" src="https://skillicons.dev/icons?i=au" />
            </div> */}
            <div className="next">
            <a href="#intro"><i className="fa-solid fa-circle-up"></i></a><a href="#work">my Work<i className="fa-solid fa-circle-down"></i></a>
        </div>
    </div>
  )
}

export default Skills