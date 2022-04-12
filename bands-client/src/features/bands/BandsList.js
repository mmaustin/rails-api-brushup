import React, {useEffect} from 'react'
import { selectAllBands } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const BandsList = () => {
    const dispatch = useDispatch()

    const bands = useSelector(selectAllBands)
    const art = bands[0].data[0].attributes.name
    const bandStatus = useSelector(state => state.displayBands.status)

    //the bands are being retrieved. i just have to figure out how to add them to the store.
    useEffect(() => {
        if (bandStatus === 'idle'){
        dispatch(retrieveBands())
        }
    })

    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <p>{art}</p>
            <button>Click This!</button>
            
        </>
    )
}