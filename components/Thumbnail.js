// import React from 'react'
import Image from 'next/image';

// receive aMediaResult as a prop from the ResultsMedia Component
// destructure aMediaResult
function Thumbnail({ aMediaResult }) {
    console.log(aMediaResult);

    const BASE_URL = "https://image.tmbd.org/t/p/original/";

    return (
        <div >
            <Image
                layout='responsive'
                src={
                    `${BASE_URL}${aMediaResult.backdrop_path || aMediaResult.poster_path}` ||
                    `${BASE_URL}${aMediaResult.poster_path}`
                }
                height={1080}
                width={1920}
            />
        </div>
    )
}

export default Thumbnail;
