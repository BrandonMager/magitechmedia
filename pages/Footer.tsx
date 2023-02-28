import React from "react";

const Footer: React.FC = () => {

    return <div className="flex flex-col ustify-center items-center bg-black text-white">
        <div className="flex flex-col sm:flex-col mx-auto my-12 text-center justify-center sm:w-1/2">
            <h1 className="font-medium text-4xl">Have a general question?</h1>
            <p className="text-xl my-6">If you have a general inquiry or would like to discuss a business opportunity. You can contact us
                via email to: brandon@magitech-media.com

            </p>
            <p className="text-5xl my-6 font-bold">Magitech Media</p>
            <p className="text-lg">All Rights Reserved</p>
        </div>
    </div>
}

export default Footer