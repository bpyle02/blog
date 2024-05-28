"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);

        console.log("THIS IS A TEST")

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        };

        const response = await fetch("/api/contact_api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully");
            setLoading(false);
            // reset the form
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message");
            setLoading(false);
        }
    }
    return (
        <div>

            <p className = "text-4xl mb-20 font-bold text-center">Let's get in touch</p>

            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold" htmlFor="name">Name</label>
                    <input
                        type="text"
                        minLength={3}
                        maxLength={150}
                        required
                        className="p-4 bg-white border-2 border-[#2570d1] rounded-md"
                        autoComplete="off"
                        id="name"
                    />
                </div>
                <div className="w-full flex flex-col my-4">
                    <label
                        className="font-bold"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        minLength={5}
                        maxLength={150}
                        required
                        className=" p-4 bg-white border-2 border-[#2570d1] rounded-md"
                        autoComplete="off"
                        id="email"
                    />
                </div>
                <div>
                    <label
                        className="font-bold"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        rows={4}
                        required
                        minLength={10}
                        maxLength={500}
                        name="message"
                        className="w-full p-4 bg-white border-2 border-[#2570d1] rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className='bg-[#2570d1] text-white font-semibold hover:text-black mt-4 py-2 px-6 rounded-md hover:bg-gray-200 duration-300 transition-colors'
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}