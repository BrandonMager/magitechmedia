import React from "react"
import Image from 'next/image'

const Intro: React.FC = () => {
 
    return <div className ="flex flex-col bg-white ">
            
            <section className = "sm:p-48 flex flex-col justify-center items-center md:flex-row mt-5 p-10">
            <div className = "mb-4 sm:m-auto text-black text-center md:text-left rounded-xl md:w-1/2 text-slate-900">
                <h1 className = "font-medium text-5xl text-center md:text-left sm:px-10 sm:pb-4 opacity-100">
                    Welcome to Magitech Media!
                </h1>
                <p className="sm:px-10 pb-5 text-2xl mb-5">We are an Agency that provides <span className="italic">social media marketing and management</span> to tech app businesses!</p>
                <a href = "#" className="md:ml-10 p-4 bg-[#54a7de] text-l font-medium text-white hover:text-black">
                    Schedule a Call
                </a>
            </div>
            <div className="m-auto my-12 md:w-1/2">
                <img src = "/phone.gif" alt = "Phone" />
            </div>
            
        </section>
    </div>
        
    

}

export default Intro