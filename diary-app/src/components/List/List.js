import React from 'react'
import Entry from '../Entry'
import {SelectedContext} from '../../contexts/SelectedContext'
import {useContext} from 'react'

export default function List() {

    const data = useContext(SelectedContext)

    return (
        <div class='list-container'>
            {data.entrylist[0].map((entryData,index) => (
                <Entry 
                    entryData={entryData} 
                    key={index+''}/>
            ))}
        </div>
    )
}