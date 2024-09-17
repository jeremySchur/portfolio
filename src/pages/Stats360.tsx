

export default function Stats360() {
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-200 overflow-auto font-mont font-medium">
            <div className="flex flex-col w-5/6 my-24 h-fit bg-white rounded-xl p-5">
                <h1 className="text-4xl font-extrabold mt-2 mb-10">Stats360</h1>
                
                {/* App Overview Section */}
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
                
                {/* Core Features Section */}
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
                
                {/* Development Tools Section */}
                <div className="flex flex-col xl:flex-row xl:items-start mt-5">
                    <div className="xl:flex xl:flex-col xl:mr-10">
                        <h2 className="text-lg lg:text-2xl font-bold mb-4 mt-2 lg:mt-0">Development Tools:</h2>
                        <ul className="lg:text-lg list-disc list-inside">
                            <li><strong>Frontend:</strong> React with TypeScript for type safety, and Tailwind CSS for responsive, utility-first styling.</li>
                            <li><strong>Backend:</strong> Spring Boot for a robust and scalable server-side solution.</li>
                            <li><strong>APIs:</strong> RESTful APIs to handle communication between the frontend and backend, facilitating smooth data exchange.</li>
                            <li><strong>Programming:</strong> Deepened understanding of asynchronous programming through practical application.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}