import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmin } from './adminSlice';

export const AdminSession = () => {
/*
    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin.admins);
    const adminStatus = useSelector(state => state.admin.status);
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if(adminStatus === 'idle'){
            dispatch(getAdmin());
        }
    }, [adminStatus, dispatch])


    if(adminStatus === 'succeeded'){
        setCurrentAdmin(admin);
        setIsAuthenticated(true);
    }

    if (!isAuthenticated) {
        return <div></div>;
      }
      console.log(admin)
      console.log(currentAdmin)
*/    
    return(
        <>
            <p>What in the hell!</p>
           {/* {currentAdmin ? <p>There was one.</p> : <p>There were none.</p>} */}
        </>
    )
}
