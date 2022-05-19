import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { createAdmin } from './adminSlice';

export const AddAdmin =  () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')




    return(
        <section>

        </section>
    )
}