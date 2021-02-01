import React from 'react'
import BottomButtons from './BottomButtons'

export default function EntryViewer() {
    return (
        <div class='entry-viewer-container'>
            <h1 id='entry-name-text'>hello</h1>
            <textarea id="text1" cols="40" rows="5"></textarea>
            <BottomButtons/>
        </div>
    )
}
