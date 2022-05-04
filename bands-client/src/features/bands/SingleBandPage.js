import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';//, useNavigation
import { getBandById } from './bandsSlice'

export const SingleBandPage = () => {
    const params = useParams();
    //console.log(params.bandId);
    const band = useSelector(state => getBandById(state, params));
    console.log(band)

    return(
        <>
            <p>Something ain't right!</p>
        </>
    )
}