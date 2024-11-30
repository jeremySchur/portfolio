

export default function About() {

    return (
        <div className="flex flex-col items-center text-white font-mont">
            {/* About Header */}
            <h1 className="text-4xl lg:text-6xl font-bold mt-14 lg:mt-20">About</h1>
            <div className="red-rectangle bottom-3 left-6 lg:left-9 w-28 lg:w-44"></div>

            <div className="flex flex-col xl:flex-row xl:mt-20 items-center">
                {/* Profile Picture and Bio */}
                <div className="flex flex-col items-center mt-4 p-6 md:w-5/6">
                    <img src="./images/profile_picture.jpg" alt="Jeremy" className="profile_picture"/>
                    <p className="text-sm md:text-base lg:text-xl mt-4 text-center 2xl:w-2/3">
                        I’m a computer science student graduating this coming Spring 2025, and I'm passionate about building software that solves real-world problems. 
                        My journey has centered around exploring a wide range of technologies, but I’m most proficient with the MERN stack, 
                        which I’ve used to develop applications that balance performance and usability.
                    </p>
                    <a href="./files/Jeremy_Resume.pdf" tabIndex={-1} download>
                        <button className="mt-4 px-6 py-1 border-2 border-red-500 text-red-500 text-sm md:text-base lg:text-xl hover:scale-95 focus:outline-none focus:scale-95">
                            Download Resume
                        </button>
                    </a>
                </div>

                {/* Skills */}
                <div className="flex justify-evenly w-full md:w-2/3 p-6">
                    <div className="skills_row">
                        <div className="skills_item mb-6">
                            <img src="./images/skills/HTML5_icon.png" alt="HTML" className="skills_icon"/>
                            <h2 className="skills_text">HTML</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/react_icon.png" alt="React" className="skills_icon"/>
                            <h2 className="skills_text">REACT</h2>
                        </div>
                        <div className="skills_item">
                            <img src="./images/skills/postgresql_icon.png" alt="PostgreSQL" className="skills_icon"/>
                            <h2 className="skills_text">POSTGRESQL</h2>
                        </div>
                    </div>
                    <div className="skills_row">
                        <div className="skills_item mb-6">
                            <img src="./images/skills/javascript_icon.png" alt="Javascript" className="skills_icon"/>
                            <h2 className="skills_text">JAVASCRIPT</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/CSS_icon.png" alt="CSS" className="skills_icon"/>
                            <h2 className="skills_text">CSS</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/docker_icon.png" alt="Docker" className="skills_icon"/>
                            <h2 className="skills_text">Docker</h2>
                        </div>
                        <div className="skills_item">
                            <img src="./images/skills/git_icon.png" alt="Git" className="skills_icon"/>
                            <h2 className="skills_text">GIT</h2>
                        </div>
                    </div>
                    <div className="skills_row">
                        <div className="skills_item mb-6">
                            <img src="./images/skills/python_icon.png" alt="Python" className="skills_icon"/>
                            <h2 className="skills_text">PYTHON</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/nodejs_icon.png" alt="Node.js" className="skills_icon"/>
                            <h2 className="skills_text">NODE.JS</h2>
                        </div>
                        <div className="skills_item">
                            <img src="./images/skills/mongodb_icon.png" alt="MongoDB" className="skills_icon"/>
                            <h2 className="skills_text">MONGODB</h2>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}