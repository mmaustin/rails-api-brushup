import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdmin } from './adminSlice';

export const AdminSession = () => {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin.admins);
    const adminStatus = useSelector(state => state.admin.status);
    const [currentAdmin, setCurrentAdmin] = useState(null);
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    //console.log(admin)
    useEffect(() => {
        if(adminStatus === 'idle'){
            dispatch(getAdmin());
            setCurrentAdmin(admin);
        }
    }, [currentAdmin])

    let a;
    //setCurrentAdmin(admin);


    if(adminStatus === 'succeeded'){
        a = admin.id;
        //setCurrentAdmin(admin);
       //setIsAuthenticated(true);
    }


/*    if (!isAuthenticated) {
        return <div></div>;
      }
      console.log(admin)
      console.log(currentAdmin)
*/    
    return(
        <>
           {admin ? <p>{admin.username}</p> : <p>There were none.</p>}
           {a}
        </>
    )
}
