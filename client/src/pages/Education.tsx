import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

interface EducationProps {
    currentPage: string;
    togglePage: (page: string) => void;

}

export default function Education(props: EducationProps) {
    return (
        <div className="h-screen w-screen p-2 flex flex-col items-center bg-gray-200 overflow-auto">
            <Navbar currentPage={props.currentPage} togglePage={props.togglePage}/>
            <br/>
            <div className="flex items-center bg-white rounded-xl p-4 mt-10 w-5/6 mb-24">
                <div className="font-mont font-medium">
                    <h1 className="text-4xl font-extrabold mb-3">Education</h1>
                    <h2 className="text-2xl font-bold">University of Colorado Boulder</h2>
                    <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="font-bold mb-3">August 2021 - May 2025 | Boulder, Colorado</p>   
                    <p>
                        I decided to pursue a computer science degree due to my fascination with software engineering 
                        and its potential to solve complex problems, spark innovation, and create impactful solutions for society. 
                        The ever-evolving nature of software engineering, along with the continuous opportunities for learning and 
                        making meaningful contributions, has always driven my passion for this field. 
                        My academic pursuits have encompassed various subjects such as software engineering, algorithms, data structures, and computer architecture, 
                        all of which have deepened my commitment to pursuing a career as a software engineer.
                    </p>
                </div>
                <img src="./images/cu_logo.png" alt="CU Boulder Logo" className="cu-logo"/>
            </div>
            <Footer />
        </div>
    )
}