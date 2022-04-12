import React, {useEffect} from 'react'
import { selectAllBands } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const BandsList = () => {
    const dispatch = useDispatch()

    const bands = useSelector(selectAllBands)
    //const b = bands.map(b => b.toUpperCase())

    //the bands are being retrieved. i just have to figure out how to add them to the store.
    useEffect(() => {
        dispatch(retrieveBands())
    }, [bands, dispatch])

    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <p>What What!</p>
            <button>Click This!</button>
            
        </>
    )
}