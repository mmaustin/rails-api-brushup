import React from 'react'

export const BandsProp = ({bands}) => {

    const band = bands[0].name
    return(
        <>
        {band}
        </>
    )
}