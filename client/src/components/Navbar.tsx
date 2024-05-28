import { Link } from "react-router-dom"

export default function Navbar() {
    return (
            <nav className="flex items-center justify-center w-fit p-2 rounded-3xl bg-gray-300">
                <Link to="/">
                    <button 
                        className="navbar-btn mr-1" 
                    >
                        Home
                    </button>
                </Link>
                <Link to="/education">
                    <button 
                        className="navbar-btn ml-1"
                    >
                        Education
                    </button>
                </Link>
            </nav>
    )
}