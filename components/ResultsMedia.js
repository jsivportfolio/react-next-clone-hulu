// import React from 'react'
import Thumbnail from '../components/Thumbnail';

// receive the resultsMedia prop from the index.js
// destructure resultsMedia requests
function ResultsMedia({resultsMedia}) {
    console.log(resultsMedia);
    return (
        <div>
            {/* iterate through each resultsMedia request to generate a Thumbnail Component */}
            {resultsMedia.map((aMediaResult) => (
            // Re-usable Thumbnail Components
            // pass aMediaResult as a prop to the Thumbnail Component with aMediaResult.id as its key
            <Thumbnail key={aMediaResult.id} aMediaResult={aMediaResult}></Thumbnail>
            ))}
        </div>
    )
}

export default ResultsMedia;
