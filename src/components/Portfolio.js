import { RiArrowDownCircleLine, RiArrowUpCircleLine } from "react-icons/ri"
import { FaCameraRetro, FaVideo, FaLaptopCode, FaRuler } from "react-icons/fa"

const Portfolio = (props) => {

    return (
        <>        
        <div className="work">
        <h1>What I love doing</h1>
                <dd className="port-pieces">
                    <li>
                        <a href="https://github.com/layhee" target="_blank" rel="noreferrer"><FaLaptopCode/><h2><span 
                        className="yellow">Full Stack Web Development</span></h2></a> 
                        <p>Take a look at my <span className="blue">React</span>, <span className="blue">Svelte</span>, and <span className="blue">Django</span> code on Github!</p>
                    </li>
                    <li>
                        <a href="http://www.lehi.work" target="_blank" rel="noreferrer"><FaRuler/><h2 className="yellow">Web + Graphic Design</h2></a>
                        <p>The <span className="blue">UI</span> of my web projects and some <span className="blue">static print</span> work I've done.</p>
                    </li>
                    <li>                        
                        <a href="http://www.lehi.work/film" target="_blank" rel="noreferrer"><FaVideo/><h2 className="yellow">Film + Video</h2></a>
                        <p>I love working with <span className="blue">motion graphics</span> and <span className="blue">video</span>. Particularly <span className="blue">Documentary</span>.</p>
                    </li>
                    <li>                        
                        <a href="http://www.lehi.work/photo" target="_blank" rel="noreferrer"><FaCameraRetro/><h2 className="yellow">Photography</h2></a>
                        <p>Though I've done a couple shoots as an <span className="blue">REI model</span>, I much prefer being <span className="blue">behind the camera</span>.</p><br/>
                    </li>
                </dd>
        </div>
        <div className="next">
            {/* <a href="#skills"><RiArrowUpCircleLine/></a> */}
            <a href="#about"><RiArrowDownCircleLine/></a>
        </div>
        </>
    );
}

export default Portfolio