import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams} from 'react-router-dom'
import { getBandById } from './bandsSlice'
import { updateBand } from './bandsSlice'

export const EditBand = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const params = useParams();
    const bandId = parseInt(params.bandId);
    const band = useSelector(state => getBandById(state, bandId))

    const [name, setName] = useState(band.name);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onNameChanged = (e) => setName(e.target.value)

    const canSave =
    [name].every(Boolean) && addRequestStatus === 'idle'

    const onUpdateBandClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(updateBand({id: band.id, band: {name: name}})).unwrap()
            setName('')
          } catch (err) {
            console.error('Failed to save the post: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
        navigate(`/get-band/${band.id}`);
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

