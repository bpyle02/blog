import { Metadata } from "next";

export const metadata:Metadata = {
    title: "About Me",
    description: "Learn more about me!",
}

export default async function AboutPage() {
    return (
        <div className="mt-[72px]">
            <h1>About Page Coming Soon</h1>
        </div>
    );
}