import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="h-screen w-screen p-2 flex flex-col items-center bg-gray-200">
            <Navbar />
            <div className="flex items-center p-4">
                <img src="../images/profile_picture.jpg" alt="Profile Picture" />
                <div className="bg-white p-4 rounded-xl max-w-3xl mt-2">
                    <h1 className="text-4xl font-bold">Hi, I'm Jeremy Schur!</h1>
                    <p>A dedicated computer science student with over four years of experience in various domains, including frontend and backend development, database management, data science, artificial intelligence, and game development.</p>
                    <button className="bg-black text-white text-xl p-2 mt-2 rounded-3xl">Download Resume</button>
                </div>
            </div>
        </div>
    )
}