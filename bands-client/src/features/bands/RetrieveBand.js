import React, {useState} from 'react'
import { selectAllBands } from './bandsSlice'
import { getBand } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const RetrieveBand = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')

    const bands = useSelector(selectAllBands)
    //console.log(bands)
    //const bandStatus = useSelector(state => state.displayBands.status)
    
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
            </div>
        </div>
    )
}