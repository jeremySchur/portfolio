

export default function Rideshare() {
    return (
        <div className="flex flex-col items-center w-screen h-screen bg-gray-200 overflow-auto font-mont font-medium">
            <div className="flex flex-col w-5/6 my-24 h-fit bg-white rounded-xl p-5">
                <h1 className="text-4xl font-extrabold mt-2 mb-10">Rideshare</h1>
                
                {/* Top Image Section */}
                <div className="w-full bg-gray-300 mb-10">
                    <img src="./images/rideshare/home.png" alt="Rideshare Banner" className="w-full h-auto object-cover"/>
                </div>
                
                {/* App Overview Section */}
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <img src="./images/rideshare/home_routed.png" alt="Home screen." className="w-full xl:h-80 object-cover rounded-lg shadow-lg"/>
                    <div className="xl:flex xl:flex-col xl:ml-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">App Overview:</h2>
                        <p className="lg:text-lg">
                            The Rideshare web app simplifies group travel by allowing users to search for and 
                            join both friend and public trips, or create their own trips. Whether users are coordinating 
                            a weekend trip with friends or joining a carpool to a common destination, the app makes it easy 
                            to request participation in a trip, with the trip leader having the final say on accepting members. 
                            The app also allows users to add friends, enabling easier trip coordination. Users can chat with friends 
                            in real-time to plan trips and can manage their personal information through a dedicated profile page. 
                            With an intuitive interface, powered by React and Mapbox, users can quickly find and plan trips without hassle.
                        </p>
                    </div>
                </div>
                
                {/* Core Features Section */}
                <div className="flex flex-col xl:flex-row xl:items-center mt-5">
                    <img src="./images/rideshare/myrides.png" alt="Core Features" className="w-full xl:h-80 rounded-lg shadow-lg order-1 xl:order-2"/>
                    <div className="order-2 xl:order-none xl:flex xl:flex-col xl:mr-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Core Features:</h2>
                        <p className="lg:text-lg">
                            The app’s core features include trip search and creation, where users can browse friend or public trips and 
                            create custom trips with options to invite friends or make the trip public. When users find a trip they’re 
                            interested in, they can request to join, and the trip leader must accept the request. Additionally, the app 
                            offers a friend system, allowing users to add and manage friends for easier trip planning. The chat functionality, 
                            powered by Socket.io, enables real-time messaging for trip coordination, with chat histories stored for reference. 
                            Mapbox integration brings routes to life with a visual display, making navigation straightforward. The app also includes 
                            a profile management feature where users can edit account details and preferences.
                        </p>
                    </div>
                </div>
                
                {/* Development Tools Section */}
                <div className="flex flex-col xl:flex-row xl:items-center mt-5">
                    <img src="./images/rideshare/myrides.png" alt="Development Tools" className="w-full xl:h-80 xl:w-1/2 object-cover rounded-lg shadow-lg"/>
                    <div className="xl:flex xl:flex-col xl:ml-10">
                        <h2 className="text-lg lg:text-2xl font-bold my-2">Development Tools:</h2>
                        <ul className="lg:text-lg list-disc list-inside">
                            <li><strong>Frontend:</strong> React with JavaScript for a modern, responsive user experience.</li>
                            <li><strong>Styling:</strong> Tailwind CSS for clean and efficient design.</li>
                            <li><strong>Backend:</strong> Node.js for managing core functionality like user interactions and trip management.</li>
                            <li><strong>Database:</strong> PostgreSQL for handling user accounts and trip data; MongoDB for storing chat histories.</li>
                            <li><strong>Real-Time Communication:</strong> Socket.io for seamless real-time chats between users.</li>
                            <li><strong>Mapping and Routing:</strong> Mapbox for visualizing and managing trip routes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}