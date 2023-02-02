import { RiArrowUpCircleLine } from "react-icons/ri"

const About = (props) => {
    return (
        <>
            <div className="about">
                <h1>A bit about myself:</h1>
                <h3>I was <span className="yellow">born in the desert</span> & grew up in <span className="yellow">the mountains</span>.</h3>
                <h3>I learned a lot about <span className="yellow">design, art, typogaphy, film</span> and <span className="yellow">web technologies</span> at <span className="yellow">MSU Denver</span> working on a <span className="yellow">BFA</span> in <span className="yellow">Communication Design</span> in <span className="yellow">2014</span>.</h3>
                <h3>I made a <span className="yellow">career change</span> away from <span className="yellow">web development</span> & <span className="yellow">design</span> in <span className="yellow">2014</span> to work <span className="yellow">in</span>, <span className="yellow">on</span>, and <span className="yellow">around bicycles</span>. Though I love riding <span className="yellow">road</span>, <span className="yellow">dirt</span>, <span className="yellow">mountain</span>, and more dirt, I miss coding and creative computation.</h3>
                <h3>I've recently completed a <span className="yellow">Software Engineering</span> immersive bootcamp through 
                <a target="_blank" rel="noreferrer" href="https://generalassemb.ly/education/software-engineering-immersive" className="yellow"> General Assembly</a> learning <span className="yellow">Full Stack Web Development</span>.</h3>
                <h3>I'm a <span className="yellow">dedicated worker</span>, <span className="yellow">resourceful</span>, great at <span className="yellow">figuring things out</span>, and I'm ready to <span className="yellow">hit the ground running</span>. Thanks for reading! </h3>
            </div>
            <div className="next">
                <a href="#intro"><RiArrowUpCircleLine className="fa-beat"/></a>
            </div>
        </>
    );
}

export default About