import React, {useState} from 'react'
import { selectAllBands } from './bandsSlice'
import { getBand } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const RetrieveBand = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')

    const bands = useSelector(selectAllBands)
    //const bandStatus = useSelector(state => state.displayBands.status)
    
    const onChangeId = e => {setId(e.target.value);}

    const getSingleBand = () => {
        if(!id){
            window.alert('Please enter and id');
        } else {
            dispatch(getBand({id}));
            setId('');
        }
    }

    return(
        <div>
            <p>Get Band</p>
            <input
                placeholder='Enter Band Id'
                type="number"
                onChange={onChangeId}
                vaule={id}
            />
            <button onClick={getSingleBand}>Get Band</button>
        </div>
    )
}