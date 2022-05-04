import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';//, useNavigation
//import { getBandById } from './bandsSlice'
import { selectAllBands } from './bandsSlice';

export const SingleBandPage = () => {
    const params = useParams();
    const bandId = params.bandId;
    const bands = useSelector(selectAllBands);
    const band = bands.find(band => band.id === bandId)
    console.log(band)

    return(
        <>
            <p>Something ain't right!</p>
        </>
    )
}