import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState<string>("Home")

    return (
        <div className="fixed flex justify-center w-screen mt-2">
            <nav className="w-fit p-2 rounded-3xl bg-gray-300 font-mont shadow-lg">
                <Link to="/" tabIndex={-1}>
                    <button 
                        className={currentPage === "Home" ? "navbar-btn mr-1 ring-2 ring-black" : "navbar-btn mr-1"}
                        onClick={() => setCurrentPage("Home")}
                    >
                        Home
                    </button>
                </Link>
                <Link to="/education" tabIndex={-1}>
                    <button 
                        className={currentPage === "Education" ? "navbar-btn ml-1 ring-2 ring-black" : "navbar-btn ml-1"}
                        onClick={() => setCurrentPage("Education")}
                    >
                        Education
                    </button>
                </Link>
            </nav>
        </div>
    )
}