"use client"; 

import React, { useState } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

// TypeScript types
interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Start loading state
        try {
            await axios.post('https://api.web3forms.com/submit', {
                access_key: 'c5520988-73d6-437e-b8a4-3cfcc595791e',
                ...formData
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    const handleGoBack = () => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
    };

    return (
        <div className="contact py-6 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-accent">Contact Us</h2>
            
            <div className="contact-container flex flex-col lg:flex-row justify-center gap-8">
                
                {/* Contact Info */}
                <div className="contact-info flex flex-col gap-6 md:max-w-md mx-auto w-full">
                    <a href="tel:+254795644422" className="contact-card p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform hover:translate-y-[-10px] bg-transparent border border-primary" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon text-2xl text-accent" />
                        <div className='text-left'>
                            <h3 className="text-foreground font-bold mb-2">WhatsApp</h3>
                            <p className="text-foreground">+254792560800</p>
                        </div>
                    </a>
                    <a href="mailto:nginamiriam2@gmail.com" className="contact-card p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform hover:translate-y-[-10px] bg-transparent border border-primary" target="_blank" rel="noopener noreferrer">
                        <MdOutlineEmail className="icon text-2xl text-accent" />
                        <div className='text-left'>
                            <h3 className="text-foreground mb-2 font-bold">Email</h3>
                            <p className="text-foreground">githuakevo1@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/cv91829?igsh=YzhmbXVjZzBienRz" className="contact-card p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform hover:translate-y-[-10px] bg-transparent border border-primary" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon text-2xl text-accent" />
                        <div className='text-left'>
                            <h3 className="text-foreground mb-2 font-bold">Instagram</h3>
                            <p className="text-foreground">KevinGithua</p>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100094574041320" className="contact-card p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform hover:translate-y-[-10px] bg-transparent border border-primary" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="icon text-2xl text-accent" />
                        <div className='text-left'>
                            <h3 className="text-foreground mb-2 font-bold">Facebook</h3>
                            <p className="text-foreground">@KevinGithua</p>
                        </div>
                    </a>
                </div>
                
                {/* Contact Form */}
                <div className="chat-section flex-grow max-w-lg mx-auto w-full">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch with me</h3>
                    
                    {submitted ? (
                        <div className="thank-you-message text-lg">
                            <p>Thank you for reaching out! I will get back to you shortly.</p>
                            <button
                                className="go-back-button mt-4 py-2 px-4"
                                onClick={handleGoBack}
                            >
                                Go Back
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form p-6 rounded-lg shadow-lg bg-transparent border border-primary" onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <input
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-primary rounded-lg bg-transparent"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-primary rounded-lg bg-transparent"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-primary rounded-lg resize-none bg-transparent "
                                    rows={5}
                                />
                            </div>

                            {/* Enhanced Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 "
                                disabled={loading}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
