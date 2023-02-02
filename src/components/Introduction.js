import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, TiArrowDown } from "react-icons/fa"
import { RiArrowDownCircleLine } from "react-icons/ri";

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
                    <h3><a href="https://github.com/layhee" target="_blank" rel="noreferrer"><FaGithub/><span className="bars">Github</span></a></h3>
                    <h3><a href="https://www.linkedin.com/in/lehicano/" target="_blank" rel="noreferrer"><FaLinkedin/><span className="bars">Linked In</span></a></h3>
                    <h3><a href="https://www.instagram.com/stay.loose/" target="_blank" rel="noreferrer"><FaInstagram/><span className="bars">Instagram</span></a></h3>
                    <h3><a href="https://www.youtube.com/@stay_loose" target="_blank" rel="noreferrer"><FaYoutube/><span className="bars">Youtube</span></a></h3>
                    <h3><a href="mailto:send@lehi.work" target="_blank" rel="noreferrer"><FaEnvelope/><span className="bars">Email</span></a></h3>
                </div>
                <div className="next">
                    <a href="#skills"><RiArrowDownCircleLine className="beat"/></a>
                </div>
            </div>
        </div>
    );
}

export default Introduction
