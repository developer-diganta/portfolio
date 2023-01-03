import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
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
          <SectionThree/>
        </div>  
      </div>

  );
}

export default App;
