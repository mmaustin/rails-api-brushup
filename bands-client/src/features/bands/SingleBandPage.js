import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBandById } from './bandsSlice'
//import { selectAllBands } from './bandsSlice';
import { deleteBand } from './bandsSlice';

export const SingleBandPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const bandId = parseInt(params.bandId);

    const band = useSelector(state => getBandById(state, bandId))

    const deleteThisBand = () => {
        dispatch(deleteBand({id: band.id}));
        navigate('/');
    }

    return(
        <>
            { band.name ? <p>{band.name}</p> : <p>don't crash!</p>}
            <Link to={`/update-band/${band.id}`} >Edit Band</Link>
            <button onClick={deleteThisBand}>Delete Band</button>
        </>
    )
}