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
        const newBandsList = bands.slice(0, bands.length/2)//this works, but it is a HORRIBLE fix that will surely has tons of unforseen bad side effects
        //console.log(content)
        //const newBandsList = bands
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