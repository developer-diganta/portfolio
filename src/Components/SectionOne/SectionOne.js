import { useRef } from 'react'
import './sectionone.css'
import 'animate.css';
import Navbar from '../Navbar/Navbar';

function SectionOne() {

    return (
        <div>
            
            <div className="section-one flex h-screen w-screen items-center justify-center flex-col text-center text-4xl leading-loose" style={{
                    
                    maxWidth:'100%'
                }}>
                    <div id='hi'>
                        Hi! I'm
                    </div>
                    <div id='name' >
                        <span className="text-8xl ">d</span>
                        <span className="text-8xl ">i</span>
                        <span className="text-8xl ">g</span>
                        <span className="text-8xl ">a</span>
                        <span className="text-8xl ">n</span>
                        <span className="text-8xl ">t</span>
                        <span className="text-8xl ">a</span>
                        <span className="text-8xl ">.</span>
                    </div>
                    <div id='what' className="mt-5 fancy">
                        <span>A Student and A Web Dev</span>
                </div>
                {/* add to bottom of screen  */}
                <a href="#about" className='mt-8'
                ><button class="bn30">GO</button></a>
            </div>
            {/* </div> */}
        </div>
    )
}

export default SectionOne