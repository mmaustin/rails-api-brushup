import React from 'react'

export const BandsList = () => {

    const fetchBands = () => {
        fetch('http://localhost:3000/bands')
        .then(resp=>resp.json())
        .then(renderBands)
      
    }

    const renderBands = bands => {
        console.log(bands.data[0].id)
    }

    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <button onClick={fetchBands}>Click This!</button>
            
        </>
    )
}