import React, {useEffect} from 'react'
import { selectAllBands } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const BandsList = () => {
    const dispatch = useDispatch()

    const bands = useSelector(selectAllBands)
    const bandStatus = useSelector(state => state.displayBands.status)

    useEffect(() => {
        if (bandStatus === 'idle'){
        dispatch(retrieveBands())
        }
    }, [bandStatus, dispatch])

    let content

    if (bandStatus === 'succeeded'){
        const newBandsList = bands
        content = newBandsList.map((b,i) => {
           return <p key={i}>{b.name}</p>
        })
    }


    return(
        <>
            <p>Can we even do this??? I don't think so.</p>
            <>{content}</>
            <button>Click This!</button>
            
        </>
    )
}