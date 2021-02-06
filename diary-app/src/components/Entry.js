import React from 'react'
import {useContext} from 'react'
import {SelectedContext} from '../contexts/SelectedContext'

export default function Entry({entryData,setEntryList}) {
  
    const selectedData = useContext(SelectedContext) 

    const onClick = () => {
        selectedData.data[1]({name:entryData.name,message:entryData.message})
        console.log(selectedData.data[0].message)
    }

    return (
        <div class='entry' onClick={onClick}> 
            {entryData.name}
        </div>
    )
}
