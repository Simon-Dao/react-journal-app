import React from 'react'
import BottomButtons from './BottomButtons'
import {SelectedContext} from '../../contexts/SelectedContext'
import {useContext} from 'react'

export default function EntryViewer() {
    const entryData = useContext(SelectedContext)
    
    return (
        <div class='entry-viewer-container'>
            <h1 id='entry-name-text'>{entryData.data[0].name}</h1>
            <textarea id="text1" cols="40" rows="5">{entryData.data[0].message}</textarea>
            <BottomButtons/>
        </div>
    )
}
