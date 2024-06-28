

export default function Stats360() {
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-200 overflow-auto font-mont font-medium">
            <div className="flex flex-col w-5/6 my-24 h-fit bg-white rounded-xl p-5">
                <h1 className="text-4xl font-extrabold mt-2 mb-10">Stats360</h1>
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <img src="./images/stats360/stats360_home.png" alt="Home screen." className="w-full xl:h-80 object-cover rounded-lg shadow-lg"/>
                    <div className="xl:flex xl:flex-col xl:ml-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">App Overview:</h2>
                        <p className="lg:text-lg">
                            This web app was developed to provide gamers with a comprehensive platform for tracking and comparing their in-game statistics across various titles. 
                            Users can search for different games and enter their usernames to view detailed stats for each game. The app supports multiple gaming platforms, 
                            allowing users to switch between them effortlessly to see how their performance varies across different systems. 
                            This feature ensures that gamers have a holistic view of their achievements and can easily compare their progress across platforms.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center mt-5">
                    <img src="./images/stats360/stats360_results.png" alt="Playing game." className="w-full xl:h-80 rounded-lg shadow-lg order-1 xl:order-2"/>
                    <div className="order-2 xl:order-none xl:flex xl:flex-col xl:mr-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Core Features:</h2>
                        <p className="lg:text-lg">
                            The app's core functionality revolves around its robust search and data retrieval system. Users begin by searching for a specific game, 
                            after which they can enter their in-game username to pull up detailed statistics. These stats can include win/loss ratios, achievements, 
                            rankings, and more, depending on the game. The ability to switch between platforms is seamless, providing a unified interface that aggregates 
                            data from multiple sources. This multi-platform support enhances the app's utility, making it a one-stop solution for gamers looking to analyze 
                            and improve their performance.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <div className="xl:flex xl:flex-col xl:mr-10">
                        <h2 className="text-lg lg:text-2xl font-bold mb-4 mt-2 lg:mt-0">Development Tools:</h2>
                        <p className="lg:text-lg">
                             The development of this app involved a combination of modern web technologies and frameworks. 
                             The frontend was built using React with TypeScript for type safety and Tailwind CSS for responsive, 
                             utility-first styling. These tools allowed for a highly interactive and visually appealing user interface. 
                             The backend was powered by Spring Boot, providing a robust and scalable server-side solution for handling user requests and managing data. 
                             This project not only honed my skills in full-stack development but also deepened my understanding of RESTful APIs and asynchronous programming.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}