import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmin } from './adminSlice';

export const AdminSession = () => {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin.admins);
    const adminStatus = useSelector(state => state.admin.status);
    const [currentAdmin, setCurrentAdmin] = useState(null);

    useEffect(() => {
        dispatch(getAdmin())
    }, [adminStatus, dispatch])


    if(adminStatus === 'succeeded' || adminStatus === 'failed'){
        setCurrentAdmin(admin);
    }
    
    return(
        <>
            {currentAdmin.length > 0 ? <p>There was one.</p> : <p>There were none.</p>}
        </>
    )
}
