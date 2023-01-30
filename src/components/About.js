const About = (props) => {

    return (
        <>
            <div className="about">
                <h1>A little about myself:</h1>
                <h3>I was <span className="purple">born in the desert</span> and I like building things - <span className="purple">physical</span> or <span className="purple">digital</span>.</h3>
                <h3>I learned a lot about <span className="green">design, art, <span className="typography">typogaphy</span>, film</span> and <span className="green">web technologies</span> at <span className="green">Metropolitan State Universtiy of Denver</span> working on a <span className="green">BFA</span> in <span className="green">Communication Design</span> in <span className="green">2014</span>.</h3>
                <h3>I made a <span class="red">career change</span> away from <span class="red">tech</span>/<span class="red">design</span> in <span class="red">2014</span> to work <span class="red">in</span>, <span class="red">on</span>, and <span class="red">around bicycles</span>. Though I love riding <span class="red">road</span>, <span class="red">dirt</span>, <span class="red">mountain</span>, and more dirt, it's time to come back to what I initially set out to do. I hope I'm able to <span class="red">ride bikes</span> well into my ripe old age.</h3>
                <h3>I'm completing a <span className="yellow">Software Engineering</span> immersive bootcamp through 
                <a target="_blank" rel="noreferrer" href="https://generalassemb.ly/education/software-engineering-immersive" className="yellow"> General Assembly</a> learning <span className="yellow">Full Stack Web Development</span> wrapping up in <span className="yellow">February 2023</span>.</h3>
            </div>
            <div className="next">
                <a href="#intro">Back topside!<i className="fa-solid fa-circle-up"></i></a>
            </div>
        </>
    );
}

export default About