import './App.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
         <Navbar />
      <div className="sections">
        <Banner />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        
      </div>

    </div>
  );
}

export default App;
