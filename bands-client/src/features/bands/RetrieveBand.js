import React, {useState} from 'react'
import { selectAllBands } from './bandsSlice'
import { getBand } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBand } from './bandsSlice'

export const RetrieveBand = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')


    const bands = useSelector(selectAllBands)
    const bandToSet = bands;
    const b = bandToSet.map(ba => ba.name)

    const [name, setName] = useState(b)
    const onNameChange = e => {setName(e.target.value);}


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

        return  <>
                    <p key={band.id}>{band.name}</p>
                    <button onClick={() => dispatch(deleteBand({id: band.id}))}>Delete</button>
                    <form>
                        <label htmlFor="bandName">Band Name:</label>
                        <input
                            type="text"
                            id="bandName"
                            name="bandName"
                            placeholder="Update Your Band"
                            value={name}
                            onChange={onNameChange}
                        />
                        <button type="button" onClick={onSaveBandClicked} disabled={!canSave}>
                            Save Band
                        </button>
                    </form>
                </>
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
                    <p>What You Know 'Bout This!</p>
                    {band}
                    
                </div>

        </div>
    )
}
//{band.length > 0 &&