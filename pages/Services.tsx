import React from "react";
import Image from "next/image";

const AgencyServices: React.FC = () => {

    return <div className="bg-white flex flex-col text-black justify-center items-center">
        <div className="py-16"><h1 className="text-4xl font-medium">Services</h1></div>

        <div className="flex flex-col mx-auto sm:px-32 justify-center items-center">
            
            <div className="flex flex-row justify-center items-center md:flex-row w-full lg:w-1/2 mx-auto mb-10">

                <div className="flex flex-col mb-10 mx-auto text-center w-1/2 sm:text-left md:w-2/3">
                    <h1 className="font-medium text-2xl mb-2">Facebook Ads through Campaigns</h1>
                    <p className="text-sm md:text-lg">With Facebook/Meta's Targeted Advertisement, videos of your apps's performances will be used along with specific constructed copywriting to intrigue the right audience for greater downloads! Facebook Pixel will also be integrated to record website visits.</p>

                </div>

                <div className="w-1/2 md:w-1/3 h-32 flex flex-wrap mx-auto justify-center items-center">
                    <img className = "sm:ml-10" alt = 'Web' src = "/fb.png"/>
                </div>

            </div>

            <div className="flex flex-row justify-center items-center md:flex-row w-full lg:w-1/2 mx-auto mb-10">

                <div className="flex flex-col mb-10 mx-auto text-center w-1/2 sm:text-left md:w-2/3">
                    <h1 className="font-medium text-2xl mb-2">Website Building</h1>
                    <p className="text-sm md:text-lg">Having a responsive/user-friendly website regardless of the type of app being produced is crucial to earning consumers. We will create a clean website for the business that includes great and refined UI/UX Design, SEO, and responsiveness for greater chances for consumers to engage. The business's applications and other information will also be displayed in a organized manner.</p>
                </div>

                <div className="w-1/2 md:w-1/3 h-32 flex flex-wrap mx-auto justify-center items-center">
                    <img className = "sm:ml-10" alt = 'Web' src = "/web.png"/>
                </div>

            </div>
        </div>
    </div>
}

export default AgencyServices;