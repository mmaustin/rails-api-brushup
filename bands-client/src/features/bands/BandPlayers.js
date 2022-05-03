import React from 'react'

export const BandPlayers = ({players}) => {

    const playerList = players.map((p,i)=>{
        return <p key={i}>{p.name}</p>
    })

    return(
        <>
            {playerList}
        </>
    )
}