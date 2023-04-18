import { RiArrowUpCircleLine } from "react-icons/ri"

const About = (props) => {
    return (
        <>
            <div className="about">
                <h1><a href="#about">A bit about myself</a></h1>
                <h3>I was born in the <span className="yellow">desert</span> & grew up in the <span className="yellow">mountains</span>.</h3>
                <h3>I learned a lot about <span className="yellow">design</span>, <span className="yellow">art</span>, <span className="yellow">typography</span>, <span className="yellow">film</span> and <span className="yellow">web technologies</span> at <span className="yellow">MSU Denver</span> learning all about <span className="yellow">Communication Design</span> in <span className="yellow">2014</span>.</h3>
                <h3>I love riding <span className="yellow">bikes</span> (non-motorized) on <span className="yellow">road</span>, <span className="yellow">dirt</span>, <span className="yellow">mountain</span>, and more <span className="yellow">dirt</span>, and can <span className="yellow">fix almost anything</span> on them.</h3>
                <h3>I've recently completed a <span className="yellow">Software Engineering</span> immersive bootcamp through 
                <a target="_blank" rel="noreferrer" href="https://generalassemb.ly/education/software-engineering-immersive" className="yellow"> General Assembly</a> learning <span className="yellow">Full Stack Web Development</span>.</h3>
                <h3>I love <span className="yellow">photography</span>, particularly <span className="yellow">film.</span>  I love <span className="yellow">camping</span> on my bike, <span className="yellow">building</span> up <span className="yellow">personal computers</span>, and a good green chile <span className="yellow">smothered</span> burrito.</h3>
                <div className="center">
                <a href="/resume-c-Lehi-Cano-2023.pdf" target="_blank"><button className="button stay">Resumé</button></a>
                </div>
            </div>
            <div className="next">
                <a href="#intro"><RiArrowUpCircleLine className="fa-beat"/></a>
            </div>
        </>
    );
}

export default About