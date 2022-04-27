import React from 'react'

export const BandsProp = ({band}) => {

    const b = band.map(ba=> <p>{ba.id}</p>)
    return(
        <>
        {b}
        </>
    )
}