import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope} from "react-icons/fa"
import { RiArrowDownCircleLine } from "react-icons/ri";
import { MovingComponent } from 'react-moving-text'

const Introduction = (props) => {
    return (
        <div className="intro">
            <div className="mug">
            </div>    
            <div className="intro-type">
                <h1>Hi, I'm Lehi.</h1>
                <p className="pronounce">(I pronounce it Lay-hee)</p>
                <h2 className="flex"> I'm a <MovingComponent type="typewriter" delay="0s" dataText={[
                    "Web Developer",
                    "User Interface Designer",
                    "Bicycle Technologist",
                    "Photographer",
                ]}/>
                </h2>
                <div className="contact-icons">
                    <h2><a href="https://github.com/layhee" target="_blank" rel="noreferrer"><FaGithub/><span className="bars">Github</span></a></h2>
                    <h2><a href="https://www.linkedin.com/in/lehicano/" target="_blank" rel="noreferrer"><FaLinkedin/><span className="bars">Linked In</span></a></h2>
                    <h2><a href="https://www.instagram.com/stay.loose/" target="_blank" rel="noreferrer"><FaInstagram/><span className="bars">Instagram</span></a></h2>
                    <h2><a href="https://www.youtube.com/@stay_loose" target="_blank" rel="noreferrer"><FaYoutube/><span className="bars">Youtube</span></a></h2>
                    <h2><a href="mailto:contact@lehi.me" target="_blank" rel="noreferrer"><FaEnvelope/><span className="bars">Email</span></a></h2>
                </div>
                <div className="next">
                    <a href="#skills"><RiArrowDownCircleLine className="beat"/></a>
                </div>
            </div>
        </div>
    );
}

export default Introduction
