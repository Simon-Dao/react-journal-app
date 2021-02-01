import React from 'react'
import {useContext} from 'react'

export default function Entry({entryData}) {
  
    const onClick = () => {
        console.log("hello")
    }

    return (
         <div class='entry' onClick={onClick}> 
            {entryData.name}
         </div>
    )
}
