

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
                        I’m passionate about creating software that solves real-world problems and improves people’s lives in tangible ways. 
                        I've worked with a broad range of technologies and enjoy learning by building, 
                        whether that means tackling a new framework, experimenting with system design, or collaborating on a team project. 
                        I’m always curious and always looking for the next challenge that pushes me to grow.
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
                            <img src="./images/skills/javascript_icon.png" alt="Javascript" className="skills_icon"/>
                            <h2 className="skills_text">Javascript</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/react_icon.png" alt="React" className="skills_icon"/>
                            <h2 className="skills_text">REACT</h2>
                        </div>
                        <div className="skills_item">
                            <img src="./images/skills/sql.png" alt="SQL" className="skills_icon"/>
                            <h2 className="skills_text">SQL</h2>
                        </div>
                    </div>
                    <div className="skills_row">
                        <div className="skills_item mb-6">
                            <img src="./images/skills/aws.png" alt="AWS" className="skills_icon"/>
                            <h2 className="skills_text">AWS</h2>
                        </div>
                        <div className="skills_item mb-6">
                            <img src="./images/skills/cicd.png" alt="CI/CD" className="skills_icon"/>
                            <h2 className="skills_text">CI/CD</h2>
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
                            <img src="./images/skills/java.png" alt="Java" className="skills_icon"/>
                            <h2 className="skills_text">Java</h2>
                        </div>
                        <div className="skills_item">
                            <img src="./images/skills/nosql.png" alt="NoSQL" className="skills_icon"/>
                            <h2 className="skills_text">NoSQL</h2>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}