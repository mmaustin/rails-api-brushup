import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { createBand } from './bandsSlice'

export let AddBandForm = () => {
    const [name, setName] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();

    const onNameChanged = (e) => setName(e.target.value)

    const canSave =
    [name].every(Boolean) && addRequestStatus === 'idle'

    const onSaveBandClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createBand({ name })).unwrap()
            setName('')
          } catch (err) {
            console.error('Failed to save the post: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }

    return(
        <section>
            <h2>Add a New Band</h2>
            <form>
            <label htmlFor="bandName">Band Name:</label>
            <input
                type="text"
                id="bandName"
                name="bandName"
                placeholder="Add Your Band"
                value={name}
                onChange={onNameChanged}
            />
            <button type="button" onClick={onSaveBandClicked} disabled={!canSave}>
                Save Band
            </button>
            </form>
        </section>
    )

}

AddBandForm = React.memo(AddBandForm)

//let and react.memo added to stop rendering of add band form on render of homepage, if it wasn't used
//redux documentaion: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
//using profiler, i think it worked??
