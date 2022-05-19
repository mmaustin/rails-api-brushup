import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { createAdmin } from './adminSlice';

export const AddAdmin =  () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onUsernameChanged = (e) => setUsername(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const canSave =
    [username].every(Boolean) && [email].every(Boolean) && [password].every(Boolean) && addRequestStatus === 'idle'

    const onSaveAdmin = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createAdmin({ admin: {username: username, email: email, password: password} })).unwrap()
            setUsername('');
            setEmail('');
            setPassword('');
          } catch (err) {
            console.error('Failed to save the admin: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }

    return(
        <section>

        </section>
    )
}