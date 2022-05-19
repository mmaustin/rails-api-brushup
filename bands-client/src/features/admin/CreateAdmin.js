import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { retrieveAdmins } from './adminSlice';

export const CreateAdmin = () => {
    const dispatch = useDispatch();
    const adminStatus = useSelector(state => state.admin.status)

    useEffect(() => {
        if (adminStatus === 'idle'){
        dispatch(retrieveAdmins())
        }
    }, [adminStatus, dispatch])

    return(
        <>
            <p>HomePage!</p>
        </>
    )
};
