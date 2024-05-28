import { Link } from "react-router-dom"

interface NavbarProps {
    currentPage: string;
    togglePage: (page: string) => void;

}

export default function Navbar(props: NavbarProps) {

    return (
            <nav className="flex items-center justify-center w-fit p-2 rounded-3xl bg-gray-300 font-mont shadow-lg">
                <Link to="/" tabIndex={-1}>
                    <button 
                        className={props.currentPage === "Home" ? "navbar-btn mr-1 ring-2 ring-black" : "navbar-btn mr-1"}
                        onClick={() => props.togglePage("Home")} 
                    >
                        Home
                    </button>
                </Link>
                <Link to="/education" tabIndex={-1}>
                    <button 
                        className={props.currentPage === "Education" ? "navbar-btn ml-1 ring-2 ring-black" : "navbar-btn ml-1"}
                        onClick={() => props.togglePage("Education")}
                    >
                        Education
                    </button>
                </Link>
            </nav>
    )
}