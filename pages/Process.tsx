import React from "react";

const AgencyProcess: React.FC = () => {
    return <div className="bg-white text-black text-center justify-center items-center mx-auto flex flex-col">
        <div className="flex flex-col pb-12">
            <h1 className="text-5xl font-medium my-6 mb-12">Our Processes</h1>
            <div className="flex flex-col justify-center mx-auto mb-12 items-center">
                <div className="flex flex-col text-sm lg:text-xl mb-12 font-medium text-center mx-auto">
                    <h1 className="text-xl md:text-4xl mb-4 text-left font-bold text-slate-500">Mobile Games/Desktop Games</h1>
                    <ul className="text-left xl:text-3xl">
                        <li className = "my-4">Analyze the <span className="font-bold text-red-500">subniches</span> of the mobile game/app to specify the audience of interest</li>
                        <li className = "mb-4">Target audiences using Facebook's built-in audience <span className="font-bold text-purple-500">targeting algorithm</span></li>
                        <li className = "mb-4 ">Create <span className="text-blue-600">Facebook ADS</span> and manage AD Accounts to avoid restrictions and flagged reports</li>
                        <li className = "mb-4">Use specific <span className="text-yellow-500">keywords</span> and <span className="italic text-green-400">action words</span> in copywriting process to gain consumers</li>

                    </ul>

                </div>
                
                <div className="flex flex-col text-sm lg:text-xl mb-12 font-medium text-center mx-auto">
                    <h1 className="text-xl xl:text-4xl text-slate-500 mb-4 font-bold text-right">Saas Applications/E-Commerce</h1>

                    <ul className="text-right xl:text-3xl">
                    <li className = "mb-3" >Analyze the service/product of the SaaS to plan the appropriate <span className="text-purple-400 italic">UI/UX designs</span></li>
                 
                    <li className = "mb-3">Create the layout of the website with <span className="text-red-500">respective designs and SEO keywords</span></li>
             
                     <li className = "mb-3">Integrate <span className = "italic text-yellow-600">e-commerce processes</span> to buy SaaS and use product keywords to <span className="text-blue-500">target audience</span></li>
             
                    <li className = "mb-3">Manage any social media accounts linked to SaaS to <span className="text-green-500 font-bold">target leads</span></li>
                    </ul>
                   
                </div>

            </div>

        </div>
    </div>
}

export default AgencyProcess