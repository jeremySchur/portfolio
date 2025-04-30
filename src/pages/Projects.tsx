
export default function Projects() {
    return (
        <div className="flex flex-col text-white font-mont">
            {/* Projects Header */}
            <div className="mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold mt-14 lg:mt-20">Projects</h1>
                <div className="red-rectangle bottom-3 left-6 lg:left-9 w-40 lg:w-64"></div>
            </div>

            {/* Projects */}
            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg">
                    <img src="./images/rideshare.png" alt="Rideshare Home" className="project_image"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Rideshare</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Web Application</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        Full stack carpool application built with React.js, Node.js, Express.js, MongoDB, and Mapbox.
                        Containerized with Docker and deployed to AWS EC2. 
                    </p>
                    <div className="flex flex-col mr-auto mt-3 w-28 md:w-36 lg:w-44 relative">
                        <button 
                            className="text-xs md:text-base lg:text-xl font-bold button-transition2 before:left-0 focus:outline-none"
                            onClick={() => window.open("https://github.com/jeremySchur/RideShare", "_blank")}
                        >
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg ml-auto xl:mr-15p">
                    <img src="./images/stats360.png" alt="Rideshare Home" className="project_image ml-auto"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text2">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Stats360</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Web Application</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        Full stack video game stats application built with React.js and Spring Boot.
                    </p>
                    <div className="flex flex-col mr-auto mt-2 w-28 md:w-36 lg:w-44 relative">
                        <button 
                            className="text-xs md:text-base lg:text-xl font-bold button-transition2 before:left-0 focus:outline-none"
                            onClick={() => window.open("https://github.com/jeremySchur/Stats360", "_blank")}
                        >
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg">
                    <img src="./images/pygame.png" alt="Rideshare Home" className="project_image"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">SnakeV2</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Python Pygame</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        A unique rework of the classic Snake game, enhanced with new twists and built with Python and Pygame.
                    </p>
                    <div className="flex flex-col mr-auto mt-2 w-28 md:w-36 lg:w-44 relative">
                        <button 
                            className="text-xs md:text-base lg:text-xl font-bold button-transition2 before:left-0 focus:outline-none"
                            onClick={() => window.open("https://github.com/jeremySchur/Pygame-Snake", "_blank")}
                        >
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}