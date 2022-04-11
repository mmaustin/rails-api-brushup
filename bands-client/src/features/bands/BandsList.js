import React from 'react'
import { selectAllBands } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const BandsList = () => {

    const bands = useSelector(selectAllBands)
    const b = bands.map(b => b.toUpperCase())

    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <p>{b}</p>
            <button>Click This!</button>
            
        </>
    )
}