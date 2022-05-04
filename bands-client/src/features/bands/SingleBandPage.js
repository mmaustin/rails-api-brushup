import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';//, useNavigation
//import { getBandById } from './bandsSlice'
import { selectAllBands } from './bandsSlice';

export const SingleBandPage = () => {
    const params = useParams();
    const bandId = parseInt(params.bandId);
    console.log(typeof bandId);
    const bands = useSelector(selectAllBands);
    console.log(bands)
    const band = bands.find(band => band.id === bandId)
    console.log(band)
    

    return(
        <>
            <p>{band.name}</p>
        </>
    )
}