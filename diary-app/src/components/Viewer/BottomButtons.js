import React from 'react'
import {useContext} from 'react'
import SelectedContextProvider from '../../contexts/SelectedContext'

export default function BottomButtons() {

    const data = useContext(SelectedContextProvider)

    const onSave = () => {
        
    }

    const onDelete = () => {
        console.log('heck you react')
    }

    return (
        <div>
            <button id="save-button" class='button' onClick={onSave}>Save</button>
            <button id="delete-button" class='button' onClick={onDelete}>Delete</button>
        </div>
    )
}
