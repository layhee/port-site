const Introduction = (props) => {

    return (
        <div className="intro">
            <div className="mug">
            </div>    
            <div className="intro-type">
                <h1>Lehi Cano</h1>
                <p className="pronounce">(I pronounce it Lay-hee)</p>
                <h3 className="black">I'm a Full Stack Web Developer + Designer.</h3>
                <div className="contact-icons">
                    <h3><a href="https://github.com/layhee" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></h3>
                    <h3><a href="https://www.linkedin.com/in/lehicano/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></h3>
                    <h3><a href="https://www.instagram.com/stay.loose/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></h3>
                    <h3><a href="https://www.youtube.com/@stay_loose" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></h3>
                    <h3><a href="mailto:send@lehi.work" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></h3>
                </div>
                <div className="next">
                    <a href="#skills"><i className="fa-solid fa-circle-down fa-beat"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Introduction