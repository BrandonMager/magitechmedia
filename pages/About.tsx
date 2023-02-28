import React from "react";
import Image from "next/image";

const About: React.FC = () => {
    return <div className="bg-white text-black text-center justify-center items-center mx-auto flex flex-col">
        <h1 className="mb-4 sm:mb-auto text-4xl font-medium">What we do!</h1>
        <div className="flex flex-col my-12 md:flex-row mx-auto items-center justify-center">
            <div className="sm:mx-10">
                <ul className="list-disc text-l sm:text-2xl text-left font-medium">
                    <li className="mb-3"> <span className="text-blue-500 font-bold">Facebook</span> Advertisements</li>
                    <li className="mb-3">Generating <span className="text-yellow-500">leads, downloads, & clients</span></li>
                    <li className="mb-3">Effective Methods to Increase <span className="text-green-500 italic"> Reach</span></li>
                    <li className="mb-3">Create Professional Websites <span className="text-red-500 font-bold">(SEO + UI/UX Design)</span></li>
                </ul>
            </div>
            <div className="">
                <img alt = 'Growth' className = "bg-transparent" src = "/growth.png"/>
            </div>
        </div>

        <h1 className="text-2xl font-medium mb-8">Can Help Advertise Applications From</h1>
        <div className="flex flex-col items-center md:flex-row mx-auto justify-center mb-8">
            <img alt = 'App Store' src = '/appstore.jpeg' className="w-32 h-32 m-8"/>
            <img alt = 'Desktop' src = '/desktop.jpeg'  className="w-32 h-32 m-8"/>
            <img alt = 'SAAS' src = '/saaas.png'  className="w-32 h-32 m-8"/>
            <img alt = 'GooglePlay' src = '/googleplay.png' className="w-48 h-28 m-8"/>
        </div>

    </div>
}

export default About