import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
//import { createBand } from './bandsSlice'
import { retrieveBands } from './bandsSlice'
import { selectAllBands } from './bandsSlice'
import { updateBand } from './bandsSlice'

export const UpdateBand = () => {
    const dispatch = useDispatch();

    const bands = useSelector(selectAllBands)
   const bandStatus = useSelector(state => state.displayBands.status)    

    useEffect(() => {
        if (bandStatus === 'idle'){
        dispatch(retrieveBands())
        }
    }, [bandStatus, dispatch])
  
    let content = bands[0]
  
    if (bandStatus === 'succeeded'){
        const newBandsList = bands
        content = newBandsList[0]
    }
    console.log(content)

    //const [name, setName] = useState('');
    const [name, setName] = useState(content.name);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onNameChanged = (e) => setName(e.target.value)

    const canSave =
    [name].every(Boolean) && addRequestStatus === 'idle'

    const onUpdateBandClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(updateBand({id: content.id, band: {name: name}})).unwrap()
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
            <h2>Update Band</h2>
            <form>
            <label htmlFor="bandName">Band Name:</label>
            <input
                type="text"
                id="bandName"
                name="bandName"
                placeholder="Update Your Band"
                value={name}
                onChange={onNameChanged}
            />
            <button type="button" onClick={onUpdateBandClicked} disabled={!canSave}>
                Update Band
            </button>
            </form>
        </section>
    )

}