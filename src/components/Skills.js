import React from 'react'
import { useState } from 'react'
import { RiArrowDownCircleLine} from "react-icons/ri"

const Skills = () => {

    const [btnState, setBtnState] = useState(false)
    function handleClick(){
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? ' tldr' : ''

  return (
    <>
    <div id="skills" className={`skills-text${toggleClassCheck}`}>
         <h1>Skillset</h1>
         <h2 className="blue">Languages</h2>
         <h3><span className="yellow">JavaScript</span>, SQL, Python, PHP, HTML, <span className="yellow">CSS</span>, Spanish (fluent), <span className="yellow">French</span> (beginner)</h3>
         <h2 className="blue">Frameworks</h2>
         <h3><span className="yellow">React</span>, Node, Mongoose, Express, <span className="yellow">SvelteKit</span>, Django</h3>
         <h2 className="blue">Platforms</h2>
         <h3><span className="yellow">Firebase</span>, <span className="yellow">Supabase</span>, Heroku, Netlify, <span className="yellow">Vercel</span>, Wordpress</h3>
         <h2 className="blue">Tools</h2>
         <h3>Git, Bash, <span className="yellow">VS Code</span>, Bootstrap, <span className="yellow">Tailwind</span>, Materialize, <span className="yellow">Daisy UI</span>, Adobe Creative Cloud (<span className="yellow">Illustrator</span>, Photoshop, Lightroom, <span className="yellow">Premiere Pro</span>, After Effects, Audition), Figma</h3>

         
    </div>
    <div>
    <button className="button tldr stay" onClick={handleClick}>Favorites?</button>
    </div>
    <div>
        <div className="next">
        <a href="#work"><RiArrowDownCircleLine/></a>
        </div>
    </div>
    </>
  )
}

export default Skills