import React from 'react'
import {useState} from 'react'
import SearchBar from './SearchBar'
import BottomButtons from './BottomButtons'
import List from './List'

export default function EntryList() {

    return (
        <div class='entry-list-container'>
            <SearchBar/>   
            <List />
            <BottomButtons/>
        </div>
        
    )
}
