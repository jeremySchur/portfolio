
export default function Projects() {
    return (
        <div className="flex flex-col text-white font-mont">
            <div className="mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold mt-14 lg:mt-20">Projects</h1>
                <div className="red-rectangle bottom-3 left-6 lg:left-9 w-40 lg:w-64"></div>
            </div>


            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg">
                    <img src="./images/rideshare/home.png" alt="Rideshare Home" className="project_image"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Rideshare</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Web Application</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        Full stack carpool application built with React, Node.js, Express.js, PostgreSQL, Socket.io, and MongoDB.
                    </p>
                    <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/3">
                        <button className="text-xs md:text-base lg:text-xl font-bold mt-2 md:mt-3 lg:mt-4">
                            LEARN MORE
                        </button>
                        <div className="h-0.5 bg-red-500"></div>
                    </div>
                </div>
            </div>

            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg ml-auto xl:mr-15p">
                    <img src="./images/stats360/stats360.png" alt="Rideshare Home" className="project_image ml-auto"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text2">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Stats360</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Web Application</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        Full stack video game stats application built with React and Spring Boot.
                    </p>
                    <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/3">
                        <button className="text-xs md:text-base lg:text-xl font-bold mt-2 md:mt-3 lg:mt-4">
                            LEARN MORE
                        </button>
                        <div className="h-0.5 bg-red-500"></div>
                    </div>
                </div>
            </div>

            <div className="mt-16 relative flex items-center">
                <div className="flex flex-col justify-center bg-purp project_bg">
                    <img src="./images/pygame/pygame.png" alt="Rideshare Home" className="project_image"/>
                </div>
                <div className="absolute p-1 lg:p-2 project_text">
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">SnakeV2</h2>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">Python Pygame</h2>
                    <p className="text-xs md:text-base lg:text-xl mt-1">
                        A unique rework of the classic Snake game, enhanced with new twists and built with Python and Pygame.
                    </p>
                    <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/3">
                        <button className="text-xs md:text-base lg:text-xl font-bold mt-2 md:mt-3 lg:mt-4">
                            LEARN MORE
                        </button>
                        <div className="h-0.5 bg-red-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}