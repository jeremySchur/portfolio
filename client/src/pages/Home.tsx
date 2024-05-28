import Navbar from '../components/Navbar';

interface HomeProps {
    currentPage: string;
    togglePage: (page: string) => void;

}

export default function Home(props: HomeProps) {
    return (
        <div className="h-screen w-screen p-2 flex flex-col items-center bg-gray-200 font-mont">
            <Navbar currentPage={props.currentPage} togglePage={props.togglePage}/>
            <div className="flex items-center p-4">
                <img src="./images/profile_picture.jpg" alt="Profile Picture" className="profile-picture"/>
                <div className="bg-white p-4 rounded-xl max-w-4xl">
                    <h1 className="text-4xl font-bold">Hi, I'm Jeremy Schur!</h1>
                    <p className="mt-3 text-xl">A dedicated computer science student with over four years of experience in various domains, including frontend and backend development, database management, data science, artificial intelligence, and game development.</p>
                    <a href="./files/Jeremy_Resume.pdf" tabIndex={-1} download>
                        <button className="download-btn">Download Resume</button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-cemter">

            </div>
        </div>
    )
}