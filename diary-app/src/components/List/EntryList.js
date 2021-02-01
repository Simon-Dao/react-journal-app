import React from 'react'
import {useState} from 'react'
import SearchBar from './SearchBar'
import BottomButtons from './BottomButtons'
import List from './List'

export default function EntryList() {

    const [entryList, setEntryList] = useState(
        [
            {
                name:'hi',id:0
            },
            {
                name:'simon',id:0
            },
            {
                name:'dao',id:0
            }
        ]
    ); 

    return (
        <div class='entry-list-container'>
            <SearchBar/>   
            <List entryList={entryList}/>
            <BottomButtons/>
        </div>
        
    )
}
