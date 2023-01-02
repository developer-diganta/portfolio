import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import './main.css'
function App() {
  
  return (
    <div className='parent' >
        <Navbar/>
        <div className="section" id='home'>
        <SectionOne/>
        </div>
        <div className='section' id='about'>
          <SectionTwo/>
        </div>  
        <div className='section' id='tech'>
        <h2>Hi</h2>
        </div>  
      </div>

  );
}

export default App;
