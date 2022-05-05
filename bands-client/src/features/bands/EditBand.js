import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams} from 'react-router-dom'
import { getBandById } from './bandsSlice'

export const EditBand = () => {
    let navigate = useNavigate();
    const params = useParams();
    const bandId = parseInt(params.bandId);
    const band = useSelector(state => getBandById(state, bandId))


    return(
        <>
            <p>{band.name}</p>
        </>
    )
}

