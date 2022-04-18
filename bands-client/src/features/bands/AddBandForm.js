import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { createBand } from './bandsSlice'

export const AddBandForm = () => {
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
        <>
        </>
    )

}
