import React, {useState} from 'react'
//import { selectAllBands } from './bandsSlice'
import { getBand } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBand } from './bandsSlice'
import { updateBand } from './bandsSlice'


export const RetrieveBand = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')


    //const bands = useSelector(selectAllBands)
    const bands = useSelector(state => state.displayBands.bands)
    console.log(bands)
    //const bandToSet = bands;
    //const name = bandToSet.map(ba => ba.name)

    const [name, setName] = useState('')
    const onNameChange = e => {setName(e.target.value);}
    console.log(name)
    //console.log(b)


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

    //const updateThisBand = () => {
    //    dispatch(updateBand({id: 1, name: 'Art Blakey'}))
    //}

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
                        <button type="button" onClick={()=>dispatch(updateBand({id: band.id,band: {name: 'the jazz crusaders'}}))}>
                            Update Band
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