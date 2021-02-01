import React from 'react'
import Entry from '../Entry'

export default function List({entryList}) {
    return (
        <div class='list-container'>
            {entryList.map((entryData,index) => (<Entry entryData={entryData}/>))}
        </div>
    )
}
