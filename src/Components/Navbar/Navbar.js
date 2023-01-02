import React, { useRef } from 'react'
import './navbar.css'
export default function Navbar() {

        const menuToggle = useRef();
    const navbar = useRef();
    const check = () => {
        if (menuToggle.current.checked) {
            navbar.current.style.display='flex'
        }

        if (!menuToggle.current.checked) {
            navbar.current.style.animation = 'slideOut 0.5s ease-in-out ' 
            setTimeout(() => {
                navbar.current.style.display = 'none'
                navbar.current.style.animation = 'slideIn 0.5s ease-in-out ' 

            }, 500);
        }
    }
    return (
        <div>


            <div>
                <div id="menuToggle">
                    <input type="checkbox" ref={menuToggle}
                        onClick={() => {
                            check()
                        }}
                    />
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                </div>
            </div>
            <div className='navbar navbar-animation' ref={navbar}>
                <ul>
                    <li className='text-8xl p-7 text-secondary w-full text-center'><a href="#hi">Home</a></li>
                    <li className='text-8xl p-7 text-secondary w-full text-center'><a href="#about">About</a></li>
                    <li className='text-8xl p-7 text-secondary w-full text-center'><a href="#projects">Projects</a></li>
                    <li className='text-8xl p-7 text-secondary w-full text-center'><a href="#contact">Contact</a></li>
                </ul>
            </div>



        </div>
    )
}
