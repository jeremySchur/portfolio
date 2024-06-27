

export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-200 font-mont font-medium overflow-auto">
            <div className="flex items-center w-5/6 mt-24">
                <img src="./images/profile_picture.jpg" alt="Profile Picture" className="profile-picture shadow-lg"/>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold">Hi, I'm Jeremy Schur!</h1>
                    <p className="mt-3 text-xl">
                        A dedicated computer science student with over four years of experience in various domains, 
                        including frontend and backend development, database management, data science, artificial intelligence, 
                        and game development.
                    </p>
                    <a href="./files/Jeremy_Resume.pdf" tabIndex={-1} download>
                        <button className="download-btn">Download Resume</button>
                    </a>
                </div>
            </div>
            <br/>
            <br/>
            <div className="bg-white w-5/6 p-4 rounded-xl shadow-lg mt-8 mb-24">
                <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
                <div className="flex items-center border-2 border-black rounded-xl p-2">
                    <img src="./images/uber_eats_logo.jpg" alt="Temple Beth-El Logo" className="work-logo"/>
                    <div>
                        <h2 className="text-2xl font-bold">Uber Eats</h2>
                        <h3 className="text-lg mb-1">Delivery Driver</h3>
                        <p className="mb-1">May 2022 - August 2024 (Summers) | Boulder, Colorado</p>
                        <ul className="list-disc ml-5">
                            <li>Consistently delivered orders within the estimated time frame, demonstrating strong time management skills.</li>
                            <li>Effectively communicated with customers, restaurants, and support teams to ensure smooth delivery processes.</li>
                            <li>Ensured accuracy in order pickups and deliveries.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center border-2 border-black rounded-xl p-2 mt-3">
                    <img src="./images/temple_beth_el.png" alt="Temple Beth-El Logo" className="work-logo"/>
                    <div>
                        <h2 className="text-2xl font-bold">Temple Beth-El</h2>
                        <h3 className="text-lg mb-1">Assistant Teacher</h3>
                        <p className="mb-1">August 2018 - May 2021 | San Antonio, Texas</p>
                        <ul className="list-disc ml-5">
                            <li>Supported students individually and in small groups to reinforce learning concepts introduced by the lead teacher.</li>
                            <li>Assisted in assessing student progress through observations, grading assignments, and maintaining records.</li>
                            <li>
                                Helped maintain a positive and orderly classroom environment by implementing classroom rules and routines, 
                                managing student behavior, and addressing conflicts.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center border-2 border-black rounded-xl p-2 mt-3">
                    <img src="./images/abc_kids_expo.png" alt="Temple Beth-El Logo" className="work-logo"/>
                    <div>
                        <h2 className="text-2xl font-bold">ABC Kids Expo</h2>
                        <h3 className="text-lg mb-1">Records Coordinator</h3>
                        <p className="mb-1">May 2018 - July 2021 (Summers) | San Antonio, Texas</p>
                        <ul className="list-disc ml-5">
                            <li>Received and processed booking information from submissions by employees.</li>
                            <li>Ensured accuracy and consistency of booking data across all platforms and records.</li>
                            <li>
                                Communicated effectively with employees to clarify and confirm booking details.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}