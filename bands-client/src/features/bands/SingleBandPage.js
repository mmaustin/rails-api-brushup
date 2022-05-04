import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';//, useNavigation
import { getBandById } from './bandsSlice'

export const SingleBandPage = () => {
    const params = useParams();
    const band = useSelector(state => getBandById(state, params));

    return(
        <>
            <p>{band.name}</p>
        </>
    )
}