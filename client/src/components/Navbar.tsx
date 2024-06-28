import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState<string>("Home")
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    function handleProjectsClick() {
        setIsDropdownOpen((prevIsDropdownOpen) => (!prevIsDropdownOpen))
    }

    return (
        <div className="fixed flex justify-center w-screen mt-2">
            <nav className="flex justify-center w-fit p-2 rounded-3xl bg-gray-300 font-mont shadow-lg">
                <div>
                    <Link to="/" tabIndex={-1}>
                        <button 
                            className={currentPage === "Home" ? "navbar-btn ring-2 ring-black" : "navbar-btn"}
                            onClick={() => {setCurrentPage("Home"); setIsDropdownOpen(false)}}
                        >
                            Home
                        </button>
                    </Link>
                    <Link to="/education" tabIndex={-1}>
                        <button 
                            className={currentPage === "Education" ? "navbar-btn ml-2 ring-2 ring-black" : "navbar-btn ml-2"}
                            onClick={() => {setCurrentPage("Education"); setIsDropdownOpen(false)}}
                        >
                            Education
                        </button>
                    </Link>
                    <button 
                        className={currentPage === "Projects" ? "navbar-btn ml-2 ring-2 ring-black" : "navbar-btn ml-2"}
                        onClick={handleProjectsClick}
                    >
                        Projects
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className="absolute flex flex-col lg:grid lg:grid-cols-2 gap-4 w-2/3 lg:w-1/3 max-h-80 overflow-auto mt-16 p-4 bg-white border border-gray-300 shadow-md rounded-lg z-10">
                        <Link to="/stats360" tabIndex={-1} className="w-full">
                            <button 
                                className="w-full h-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                                onClick={() => {setCurrentPage("Projects"); setIsDropdownOpen(false)}}
                            >
                                <h3 className="font-medium">Stats360</h3>
                                <p className="text-sm">An app where users can search for different games and view their detailed stats.</p>
                            </button>
                        </Link>
                        <Link to="/pygame" tabIndex={-1} className="w-full">
                            <button 
                                className="w-full h-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                                onClick={() => {setCurrentPage("Projects"); setIsDropdownOpen(false)}}
                            >
                                <h3 className="font-medium">Python Snake Game</h3>
                                <p className="text-sm">A 2D game inspired by Snake with its own twists and turns</p>
                            </button>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    )
}