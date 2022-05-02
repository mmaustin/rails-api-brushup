import React, {useEffect} from 'react'
import { selectAllBands } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'
//import { BandsProp } from './BandsProp'
//import { bandsContainer } from './bandsContainer'
import { AddBandForm } from './AddBandForm'

export const BandsList = () => {
    const dispatch = useDispatch()

    const bands = useSelector(selectAllBands)
    const bandStatus = useSelector(state => state.displayBands.status)
    console.log(bands)
    

    useEffect(() => {
        if (bandStatus === 'idle'){
        dispatch(retrieveBands())
        }
    }, [bandStatus, dispatch])

    let content

    if (bandStatus === 'succeeded'){
        //console.log(bands.slice(0, bands.length/2))
        let newBandsList = bands
        content = newBandsList.map((b,i) => {
            return <article key={i}>
                <p key={i}>{b.name}</p>
                 {/*{b.players.map((p,i) => {
                 return <p key={i}>{p.name}</p>
                })}*/}
            </article>
        })
    }

    //content = content.slice(0, content.length/2)

    return(
        <>
            <AddBandForm/>
            <>{content}</>
        </>
    )
}