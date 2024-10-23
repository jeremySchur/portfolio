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
                            className='text-red-500 md:text-lg lg:text-2xl mt-4 px-6 lg:px-8 border-2 border-red-500 rounded-lg flex items-center h-8 lg:h-10' 
                            onClick={scrollToNavbar}
                        >
                            View My Work
                            <span className='ml-4 mb-2 text-4xl'>&darr;</span>
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











        // <div className="flex flex-col items-center h-screen bg-gray-200 font-mont font-medium overflow-auto">
        //     <div className="flex items-center w-5/6 mt-24">
        //         <img src="./images/profile_picture.jpg" alt="Profile Picture" className="profile-picture shadow-lg"/>
        //         <div className="bg-white p-4 rounded-xl shadow-lg">
        //             <h1 className="text-4xl font-bold">Hi, I'm Jeremy Schur!</h1>
        //             <p className="mt-3 text-xl">
        //                 A dedicated computer science student with over four years of experience in various domains, 
        //                 including frontend and backend development, database management, data science, artificial intelligence, 
        //                 and game development.
        //             </p>
        //             <div className="mt-2">
        //                 <a href="./files/Jeremy_Resume.pdf" tabIndex={-1} download>
        //                     <button className="download-btn">Download Resume</button>
        //                 </a>
        //                 <a className="ml-3" href="./files/transcript.pdf" tabIndex={-1} download>
        //                     <button className="download-btn mt-2">Download Transcript</button>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        //     <br/>
        //     <br/>
        //     <div className="bg-white w-5/6 p-4 rounded-xl shadow-lg mt-8 mb-24">
        //         <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        //         <div className="flex items-center border-2 border-black rounded-xl p-2">
        //             <img src="./images/work/uber_eats_logo.jpg" alt="Temple Beth-El Logo" className="work-logo"/>
        //             <div>
        //                 <h2 className="text-2xl font-bold">Uber Eats</h2>
        //                 <h3 className="text-lg mb-1">Delivery Driver</h3>
        //                 <p className="mb-1">May 2022 - Current | Boulder, Colorado</p>
        //                 <ul className="list-disc ml-5">
        //                     <li>Consistently delivered orders within the estimated time frame, demonstrating strong time management skills.</li>
        //                     <li>Effectively communicated with customers, restaurants, and support teams to ensure smooth delivery processes.</li>
        //                     <li>Ensured accuracy in order pickups and deliveries.</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="flex items-center border-2 border-black rounded-xl p-2 mt-3">
        //             <img src="./images/work/temple_beth_el.png" alt="Temple Beth-El Logo" className="work-logo"/>
        //             <div>
        //                 <h2 className="text-2xl font-bold">Temple Beth-El</h2>
        //                 <h3 className="text-lg mb-1">Assistant Teacher</h3>
        //                 <p className="mb-1">August 2018 - May 2021 | San Antonio, Texas</p>
        //                 <ul className="list-disc ml-5">
        //                     <li>Supported students individually and in small groups to reinforce learning concepts introduced by the lead teacher.</li>
        //                     <li>Assisted in assessing student progress through observations, grading assignments, and maintaining records.</li>
        //                     <li>
        //                         Helped maintain a positive and orderly classroom environment by implementing classroom rules and routines, 
        //                         managing student behavior, and addressing conflicts.
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="flex items-center border-2 border-black rounded-xl p-2 mt-3">
        //             <img src="./images/work/abc_kids_expo.png" alt="Temple Beth-El Logo" className="work-logo"/>
        //             <div>
        //                 <h2 className="text-2xl font-bold">ABC Kids Expo</h2>
        //                 <h3 className="text-lg mb-1">Records Coordinator</h3>
        //                 <p className="mb-1">May 2018 - July 2021 (Summers) | San Antonio, Texas</p>
        //                 <ul className="list-disc ml-5">
        //                     <li>Received and processed booking information from submissions by employees.</li>
        //                     <li>Ensured accuracy and consistency of booking data across all platforms and records.</li>
        //                     <li>
        //                         Communicated effectively with employees to clarify and confirm booking details.
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}