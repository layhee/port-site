import { RiArrowDownCircleLine } from "react-icons/ri"

const Portfolio = (props) => {

    return (
        <>        
        <div className="work">
        <h1><a href="#work">Projects</a></h1>
                <dd className="port-pieces">
                    <li><a href="https://routr.herokuapp.com/" target="_blank" rel="noreferrer"><img src="img/routr-scr.jpg" alt="screenshot"/></a>
                        <h2><a href="https://routr.herokuapp.com/" target="_blank" rel="noreferrer">Routr Adventure Planner</a></h2>
                        <p>A place to help you plan your next outdoor trip. Built with <span className="black">Django</span>, written in <span className="black">Python</span>, deployed on <span className="black">Heroku</span>.</p>
                    </li>
                    <li><a href="https://rummage-rumg.netlify.app/" target="_blank" rel="noreferrer"><img src="img/rumg-scr.jpg" alt="screenshot"/></a>
                        <h2><a href="https://rummage-rumg.netlify.app/" target="_blank" rel="noreferrer">Rummage Marketplace</a></h2>
                        <p>An <span className="black">app</span> for listing unwanted items. Built with <span className="black">React</span> and <span className="black">MongoDB</span>. Deployed on <span className="black">Netlify</span>.</p>
                    </li>
                    <li><a href="https://rigs-n-routes.herokuapp.com/" target="_blank" rel="noreferrer"><img src="img/rigs-scr.jpg" alt="screenshot"/></a>                       
                        <h2><a href="https://rigs-n-routes.herokuapp.com/" target="_blank" rel="noreferrer">Rigs + Routes</a></h2>
                        <p>A webapp built to share <span className="black">bikepacking bikes</span> and routes taken on those bikes. Built with <span className="black">Mongoose</span> + <span className="black">Express</span>.</p>
                    </li>
                    <li><a href="https://www.lehi.work/photo" target="_blank" rel="noreferrer"><img src="img/work-scr.jpg" alt="screenshot"/></a>                       
                        <h2><a href="https://www.lehi.work/photo" target="_blank" rel="noreferrer">Photography</a></h2>
                        <p>I shoot & document all sorts of things. Sometimes <span className="black">weddings</span> for friends & family. I never leave home <span className="black">without a camera</span>.</p>
                    </li>
                    <li><a href="https://www.lehi.work/film" target="_blank" rel="noreferrer"><img src="img/yt-scr.jpg" alt="screenshot"/></a>                       
                        <h2><a href="https://www.lehi.work/film" target="_blank" rel="noreferrer">Filmography</a></h2>
                        <p>From helping document bike races in <a href="https://www.youtube.com/watch?v=CGTdWSWJbBY&t=1102s" target="_blank" rel="noreferrer"><span className="black">Sierra Leone</span>,</a> to shooting <a href="https://www.youtube.com/watch?v=bo__HLUr4ZQ" target="_blank" rel="noreferrer"><span className="black">bike camping ride recaps</span>,</a> I love making movies.</p>
                    </li>
                    <li><a href="https://www.lehi.work" target="_blank" rel="noreferrer"><img src="img/design-scr.jpg" alt="screenshot"/></a>                       
                        <h2><a href="https://www.lehi.work" target="_blank" rel="noreferrer">Graphic Design</a></h2>
                        <p>My college major & first  <span className="black">creative professional skillset</span>.</p>
                    </li>
                </dd>
        </div>
        <div className="next">
            <a href="#about"><RiArrowDownCircleLine/></a>
        </div>
        </>
    );
}

export default Portfolio