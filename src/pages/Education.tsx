

export default function Education() {
    return (
        <div className="flex justify-center h-screen bg-gray-200 overflow-auto">
            <div className="flex items-center justify-center bg-white rounded-xl p-4 w-5/6 h-fit my-24">
                <div className="font-mont font-medium">
                    <h1 className="text-4xl font-extrabold mb-3">Education</h1>
                    <h2 className="text-xl lg:text-2xl font-bold">University of Colorado Boulder</h2>
                    <h3 className="text-lg lg:text-xl font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="font-bold mb-3">August 2021 - May 2025 | Boulder, Colorado</p>
                    <p>
                        I decided to pursue a computer science degree due to my fascination with software engineering 
                        and its potential to solve complex problems, spark innovation, and create impactful solutions for society. 
                        The ever-evolving nature of software engineering, along with the continuous opportunities for learning and 
                        making meaningful contributions, has always driven my passion for this field. 
                        My academic pursuits have encompassed various subjects such as software engineering, algorithms, data structures, and computer architecture, 
                        all of which have deepened my commitment to pursuing a career as a software engineer.
                    </p>
                    <h3 className="text-lg lg:text-xl font-bold mt-5">Minor in Computer Engineering</h3>
                    <p>
                        My minor in Computer Engineering complements my major by providing a deeper understanding of hardware-software integration, 
                        digital circuits, and embedded systems. This additional focus has enhanced my ability to bridge the gap between software and hardware, 
                        equipping me with a more comprehensive skill set for tackling complex engineering challenges and developing innovative solutions.
                    </p>
                </div>
                <img src="./images/cu_logo.png" alt="CU Boulder Logo" className="cu-logo"/>
            </div>
        </div>
    )
}