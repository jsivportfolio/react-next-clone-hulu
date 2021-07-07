// import React from 'react'
import requests from "../utils/requests";
// import the useRouter hook
import { useRouter } from "next/router";

function Navbar() {

    const router = useRouter();

    return (
        <nav className="relative">

            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
                {/* iterate through each request by key, and destructure the key value into title and url */}
                {/* do a direct return with h2 tag */}
                {/* react needs a key in order to know how to render the list */}
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-indigo-400'
                        // change the route with query parameter for the desired fetch key
                        // example = ?genre=fetchTrending
                        onClick={() => router.push(`/?genre=${key}`)}
                    >
                        {title}
                    </h2>
                ))}
            </div>

            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06282A] h-10"></div>

        </nav>
    )
}

export default Navbar;
