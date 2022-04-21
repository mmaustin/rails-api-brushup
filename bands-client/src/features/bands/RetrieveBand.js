import React, {useState, useEffect} from 'react'
import { selectAllBands } from './bandsSlice'
import { getBand } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { retrieveBands } from './bandsSlice'

export const RetrieveBand = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')

    //const bands = useSelector(selectAllBands)
    //console.log(bands)
    //const bandStatus = useSelector(state => state.displayBands)

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
            return <article key={i}>
                <p key={i}>{b.name}</p>
                 {b.players.map((p,i) => {
                 return <p key={i}>{p.name}</p>
                })}
            </article>
        })
    }

    const onChangeId = e => {setId(e.target.value);}
    const setToEmpty = () => {
        setId("")
    }

    const getSingleBand = () => {
        if(!id){
            window.alert('Please enter an id');
        } else {
            dispatch(getBand({id}));
            setToEmpty()
        }
    }

    const band = bands.map(band => {
        return <p key={band.id}>{band.name}</p>
    })

    return(
        <div>
            <p>Get Band</p>
            <input
                placeholder='Enter Band Id'
                type="text"
                onChange={onChangeId}
                vaule={id}
            />
            <button onClick={getSingleBand}>Get Band</button>
            <div>
                {band}
                {content}
            </div>
        </div>
    )
}