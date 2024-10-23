import { useState } from 'react';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>(
    {
        name: '',
        email: '',
        message: ''
    }
    );

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'service_x1uq809',
            template_id: 'template_aeq63fj',
            user_id: '8s87si8gw0Fc8vCYc',
            template_params: {
                name: formData.name,
                email: formData.email,
                message: formData.message
            } 
        })
        .then(() => {
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
            console.error(err);
        });
    };

    return (
        <div className="h-screen flex flex-col items-center text-white font-mont">
            <h1 className="text-4xl lg:text-6xl font-bold mt-14 lg:mt-20">Contact</h1>
            <div className="red-rectangle bottom-3 left-6 lg:left-9 w-40 lg:w-64"></div>

            <p className="text-xs lg:text-base w-3/4 md:w-3/5 xl:w-1/3 mt-10">
                Have a question or want to work together? Leave your information and a short message and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col w-3/4 md:w-3/5 xl:w-1/3 mt-10 text-xs lg:text-base">
                <input className="p-2 bg-dgrey" type="text" placeholder="Name" name="name" onChange={(e) => handleFormChange(e)} value={formData.name} required />
                <input className="p-2 bg-dgrey mt-2" type="email" placeholder="Email" name="email" onChange={(e) => handleFormChange(e)} value={formData.email} required />
                <textarea className="p-2 bg-dgrey mt-2 h-24" id="message" placeholder="Message" name="message" onChange={(e) => handleFormChange(e)} value={formData.message} required />
                <div className="flex flex-col ml-auto mt-2 mb-2 w-20 lg:w-28">
                    <button className="text-xs lg:text-base font-bold">
                        SUBMIT
                    </button>
                    <div className="h-0.5 bg-red-500"></div>
                </div>
            </form>

            <div className="flex flex-col items-center justify-center bg-dgrey mt-auto h-1/5 lg:h-1/6 w-full">
                <div className="flex space-x-1">
                    <a href="https://www.linkedin.com/in/jeremyschur/" className="p-1">
                        <img src="./images/linkedin_logo.png" className="footer-img" alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/jeremySchur" className="p-1">
                        <img src="./images/github_logo.png" className="footer-img" alt="GitHub"/>
                    </a>
                    <a href="mailto:jeremy.schur02@gmail.com" className="p-1">
                        <img src="./images/mail_logo.png" className="footer-img" alt="Mail"/>
                    </a>
                </div>
                <h3 className="text-xs mt-2">Jeremy Schur © 2024 </h3>
            </div>
        </div>
    );
};