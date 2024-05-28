import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Contact Me",
    description: "Brandon's Personal Blog",
}

export default async function ContactPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center mt-[72px]">
            <div className="lg:w-[70rem] md:w-[40rem] w-full px-5">
                <ContactForm />
            </div>
        </div>
    );
}