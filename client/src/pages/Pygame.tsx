

export default function Pygame() {
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-200 overflow-auto">
            <div className="flex flex-col w-5/6 my-24 h-fit bg-white rounded-xl p-4">
                <h1 className="text-4xl font-extrabold mb-10">Pygame Project</h1>
                <div className="flex flex-col lg:flex-row">
                    <img src="./images/pygame/pygame_start.png" alt="Pygame Project" className="w-full lg:h-72 rounded-lg shadow-lg"/>
                    <div className="lg:flex lg:flex-col lg:ml-5">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Game Details:</h2>
                        <p className="lg:text-lg">
                            This was one of my first coding projects, which started as a simple exercise for learning Python and developed into an engaging 2D Pygame Snake game. 
                            The game allows for two players to compete against each other by fighting for apples to grow their snakes. It includes power-ups and debuffs, 
                            such as speeding up, reversing the controls, and inverting the colors on the board. The game offers a dynamic and competitive experience, 
                            with various mechanics that keep the gameplay interesting and challenging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}