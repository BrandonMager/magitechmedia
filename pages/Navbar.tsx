import React from "react"
import Image from 'next/image'

const Navbar: React.FC = () => {
    return <header className="bg-[#3492eb]">

    <div className="container flex flex-wrap mx-auto xs:px-32 items-center justify-center h-24">
        <div className="h-24 mr-5">
            <img className = "w-1/10 h-24" alt = 'Magitech' src = '/mg.png'/>

        </div>

        <nav className="md:mr-auto md:ml-4 md:border-l font-medium flex flex-wrap items-center text-white text-2xl  justify-center">
            <a href = "" className="sm:ml-10 mr-5 hover:text-black">
                About
            </a>
            <a href = "" className="ml-5 mr-5 hover:text-black">
                Services
            </a>
    
        </nav>

        <div className="text-sm sm:text-xl sm:font-medium sm:text-base">
            <a href="" className="p-2 sm:p-4 bg-white text-black hover:text-blue-500 hover:rounded-lg font-bold">Contact Us</a>
        </div>

      
    </div>
    </header>
}

export default Navbar