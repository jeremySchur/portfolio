import { useEffect, useState } from "react"

import Background from "../components/Background"
import Navbar from "../components/Navbar"
import About from "./About"
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>("Home");

    const scrollToNavbar = () => {
        document.getElementById('Content')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
   
    return (
        <div>
            <section id="Home">
                <Background home={true}>
                    <div className='flex flex-col justify-center items-center h-screen text-white font-mont'>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl text-center'>Hello, I'm <span className='text-red-500'>Jeremy</span>.</h1>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-1 text-center'>I'm a full stack web developer.</h1>
                        <button 
                            className='text-red-500 md:text-lg lg:text-2xl mt-4 px-6 lg:px-8 border-2 border-red-500 flex items-center h-10 lg:h-12 hover:scale-95 focus:outline-none focus:scale-95' 
                            onClick={scrollToNavbar}
                        >
                            View My Work
                            <span className='ml-4 mb-1 lg:mb-2 text-3xl lg:text-4xl'>&darr;</span>
                        </button>
                    </div>
                </Background>
            </section>

            <div id="Content">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
                <section id="About">
                    <Background home={false}>
                        <About />
                    </Background>
                </section>

                <section id="Projects">
                    <Background home={false}>
                        <Projects />
                    </Background>
                </section>

                <section id="Contact">
                    <Background home={false}>
                        <Contact />
                    </Background>
                </section>                    
            </div>
        </div>
    )
}