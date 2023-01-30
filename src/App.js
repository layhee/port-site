import Nav from './components/Nav'
import Introduction from './components/Introduction'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

const App = () => {
  
    return ( 
            <div className="main">
                <Nav/>
                    <div id="intro" className="app-wrap div-1">
                        <Introduction/>
                    </div>
                    <div id="skills" className="app-wrap div-2">
                        <Skills/>
                    </div>
                    <div id="work" className="app-wrap div-4">
                        <Portfolio/>
                    </div>
                    <div id="about" className="app-wrap div-3">
                        <About/>
                    </div>
            </div>
    );
}

export default App;
