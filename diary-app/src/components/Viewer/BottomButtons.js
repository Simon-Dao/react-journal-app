import React from 'react'

export default function BottomButtons() {

    const onSave = () => {
        console.log('fuck you react')
    }

    return (
        <div>
            <button id="save-button" class='button' onClick={onSave}>Save</button>
            <button id="delete-button" class='button'>Delete</button>
        </div>
    )
}
