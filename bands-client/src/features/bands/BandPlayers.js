import React from 'react'

export const BandPlayers = ({players}) => {
    let playerList;
    if (players.length > 0){
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