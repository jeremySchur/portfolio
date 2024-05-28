import Navbar from "../components/Navbar"

interface EducationProps {
    currentPage: string;
    togglePage: (page: string) => void;

}

export default function Education(props: EducationProps) {
    return (
        <div className="h-screen w-screen p-2 flex flex-col items-center bg-gray-200">
            <Navbar currentPage={props.currentPage} togglePage={props.togglePage}/>
            <h1>Education page.</h1>
        </div>
    )
}