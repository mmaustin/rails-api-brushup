import React from 'react'

export const BandPlayers = ({players}) => {
    let playerList;
    if (players){
        playerList = players.map((p,i)=>{
            return <p key={i}>{p.name}</p>
        })
    }

    return(
        <>
            {playerList}
        </>
    )
}