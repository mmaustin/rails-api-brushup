import React from 'react'

export const BandsList = () => {

    const fetchBands = () => {
        fetch('http://localhost:3000/bands')
        .then(resp=>resp.json())
        .then(bands => {
            const b = bands.included.map(c => c.attributes.band_id)
            console.log(b)
        })
      
    }

    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <button onClick={fetchBands}>Click This!</button>
        </>
    )
}