

export default function Pygame() {
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-200 overflow-auto">
            <div className="flex flex-col w-5/6 my-24 h-fit bg-white rounded-xl p-5">
                <h1 className="text-4xl font-extrabold mt-2 mb-10">Pygame Project</h1>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <img src="./images/pygame/pygame_start.png" alt="Home screen." className="w-full lg:h-80 rounded-lg shadow-lg"/>
                    <div className="lg:flex lg:flex-col lg:ml-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Game Details:</h2>
                        <p className="lg:text-lg">
                            This was one of my first coding projects, which started as a simple exercise for learning Python and developed into an engaging 2D Pygame Snake game. 
                            The game allows for two players to compete against each other by fighting for apples to grow their snakes. A player wins by making the other snake 
                            crash into something. It includes power-ups and debuffs, such as speeding up, teleporting, reversing the controls, and inverting the colors.
                            The game offers a dynamic and competitive experience, with various mechanics that keep the gameplay interesting and challenging.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center mt-5">
                    <img src="./images/pygame/pygame_playing.png" alt="Playing game." className="w-full lg:h-80 rounded-lg shadow-lg order-1 lg:2"/>
                    <div className="order-2 lg:order-none lg:flex lg:flex-col lg:mr-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Gameplay Mechanics:</h2>
                        <p className="lg:text-lg">
                            The core objective remains to gather as many apples as possible, with each apple causing the player's snake to grow longer. 
                            This introduces a strategic element, as players must maneuver their increasingly unwieldy snakes to avoid collisions. 
                            The game features various power-ups that provide temporary advantages, such as increased speed or teleportation for the player that picks it up, 
                            and debuffs that introduce challenges like reversed controls or inverted colors for both players. These elements add layers of strategy 
                            and unpredictability, ensuring that each match is unique and engaging.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center mt-5">
                    <img src="./images/pygame/pygame_gameover.png" alt="Playing game." className="w-full lg:h-80 rounded-lg shadow-lg"/>
                    <div className="lg:flex lg:flex-col lg:ml-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Development and Tools:</h2>
                        <p className="lg:text-lg">
                            The creation of this game involved utilizing Python and the Pygame library, which is specifically designed for writing video games. 
                            Pygame's simplicity and flexibility made it an excellent choice for implementing the game's mechanics and visuals. 
                            The project helped me develop a deeper understanding of game development concepts, such as collision detection, 
                            event handling, and real-time input processing. Additionally, working on this game improved my problem-solving skills 
                            and provided a solid foundation for future projects in game development and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}