const Portfolio = (props) => {

    return (
        <>        
        <div className="work">
        <h1>Work I've done:</h1>
                <dd className="port-pieces">
                    <li> 
                        <a href="https://dev.lehi.work/" target="_blank" rel="noreferrer"><img src="https://dev.lehi.work/img/dictionary-full.png" alt="dicitonary game"/></a>
                        <a href="https://dev.lehi.work/" target="_blank" rel="noreferrer"><h2><span 
                        className="yellow">Dictionary Game</span></h2></a>
                        
                        <p>First major project in my General Assembly Software Engineering Immersive course. The site uses <span className="yellow">jQuery</span> to fetch a 3rd party <span className="yellow">API</span> in an interactive way. I built this Dictionary Game using two API's to give the user a random definition, part of speech, and etymology of that word for them to guess.</p>
                    </li>
                    <li>
                        <a href="https://rigs-n-routes.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://dev.lehi.work/scr-index.png" alt="rigs and routes"/></a>
                        <a href="https://rigs-n-routes.herokuapp.com/" target="_blank" rel="noreferrer"><h2 className="yellow">Rigs + Routes</h2></a>
                        <p>The second project in my General Assembly Software Engineering course. The goal was to implement full CRUD functionality using <span className="yellow">Mongoose</span>, <span className="yellow">Express</span>, <span className="yellow">Node</span>, and <span className="yellow">MongoDB</span> to store user data. Users are able to add their bikepacking bikes and rides/routes taken on them.</p>
                    </li>
                    <li>                        
                        <a href="https://rummage-rumg.netlify.app/" target="_blank" rel="noreferrer"><img src="https://dev.lehi.work/img/rummage.png" alt="rummage app"/></a>
                        <a href="https://rummage-rumg.netlify.app/" target="_blank" rel="noreferrer"><h2 className="yellow">Rummage</h2></a>
                        <p>Third General Assembly project. First collaborative project where my team of three delegated roles amongst ourselves and built a community marketplace app using <span className="yellow">Mongoose</span>, <span className="yellow">Express</span>, <span className="yellow">React</span>, and <span className="yellow">Node</span>. Also built with Pico.css and </p>
                    </li>
                </dd>
        </div>
        <div className="next">
        <a href="#skills"><i className="fa-solid fa-circle-up"></i></a><a href="#about">About me<i className="fa-solid fa-circle-down"></i></a>
        </div>
        </>
    );
}

export default Portfolio