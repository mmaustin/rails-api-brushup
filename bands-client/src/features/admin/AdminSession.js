import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmin } from './adminSlice';

export const AdminSession = () => {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin.admins);
    const adminStatus = useSelector(state => state.admin.status);
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
   
    /*
    this setup appears to render the component five times, with both use states rendering with their original value
    twice, then an intermediate value, and finally the value set in use effect. no idea if this is proper or error prone
    */

    useEffect(() => {
        if(adminStatus === 'idle'){
            dispatch(getAdmin());      
        }
        return () => {
            setCurrentAdmin(admin);
            setIsAuthenticated(true);
        }
    })

    //if(adminStatus === 'succeeded'){

    //}


    if (!isAuthenticated) {
        return <div></div>;
      }
   
    return(
        <>
           {admin ? <p>You're logged in</p> : <p>Please sign up.</p>}
        </>
    )
}
