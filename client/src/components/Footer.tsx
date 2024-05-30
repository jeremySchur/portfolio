

export default function Footer() {
    return (
        <div className="h-14 lg:h-20 space-x-3 w-screen bg-black bg-opacity-80 flex items-center justify-center text-white font-mont font-medium fixed bottom-0">
            <a href="https://www.linkedin.com/in/jeremy-schur-063771270/" className="bor">
                <img src="./images/linkedin_logo.png" className="footer-img" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/jeremySchur">
                <img src="./images/github_logo.png" className="footer-img" alt="GitHub"/>
            </a>
            <a href="mailto:jeremy.schur02@gmail.com">
                <img src="./images/mail_logo.png" className="footer-img" alt="Mail"/>
            </a>
        </div>
    )
}