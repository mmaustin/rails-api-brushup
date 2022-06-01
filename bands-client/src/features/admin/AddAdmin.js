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

    const onSaveAdmin = async (event) => {
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
            <h2>Add a New Admin</h2>
            <form>
            <label htmlFor="adminUsername">Admin Name:</label>
            <input
                type="text"
                id="admin-username"
                name="adminUsername"
                placeholder="Admin Username"
                value={username}
                onChange={onUsernameChanged}
            />
            <label htmlFor="adminEmail">Admin Email:</label>
            <input
                type="text"
                id="admin-email"
                name="adminEmail"
                placeholder="Admin Email"
                value={email}
                onChange={onEmailChanged}
            />
            <label htmlFor="adminPassword">Admin Password:</label>
            <input
                type="text"
                id="admin-password"
                name="adminPassword"
                placeholder="Admin Password"
                value={password}
                onChange={onPasswordChanged}
            />
            <button type="button" onClick={onSaveAdmin} disabled={!canSave}>
                Save Admin
            </button>
            </form>
        </section>
    )
}