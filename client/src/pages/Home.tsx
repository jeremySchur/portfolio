

export default function Home() {
    return (
        <div className="flex flex-col items-center bg font-mont font-medium overflow-auto">
            <div className="flex items-center w-5/6 mt-8">
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
                                managing student behavior, and addressing conflicts to ensure a conducive learning atmosphere.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}