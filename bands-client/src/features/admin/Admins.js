import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { retrieveAdmins } from './adminSlice';
import { AddAdmin } from './AddAdmin';

export const Admins = () => {
    const dispatch = useDispatch();
    const adminStatus = useSelector(state => state.admin.status)

    useEffect(() => {
        if (adminStatus === 'idle'){
        dispatch(retrieveAdmins())
        }
    }, [adminStatus, dispatch])

    return(
        <>
            < AddAdmin />
        </>
    )
};
