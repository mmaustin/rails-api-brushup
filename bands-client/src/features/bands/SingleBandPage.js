import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';//, useNavigation
//import { getBandById } from './bandsSlice'
import { selectAllBands } from './bandsSlice';

export const SingleBandPage = () => {
    const params = useParams();
    const bandId = params.bandId;
    const bands = useSelector(selectAllBands);
    console.log(bands)

    return(
        <>
            <p>Something ain't right!</p>
        </>
    )
}