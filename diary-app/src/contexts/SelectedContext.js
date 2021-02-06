import React, { Component,createContext } from 'react'
import {useState} from 'react'
import Entry from '../components/Entry'

export const SelectedContext = createContext()

export default function SelectedContextProvider(props) {
    

    const [entryData, setEntryData] = useState(
        {
            name:'hi',
            message:'message lol'
        }
    )
    
    const [entryList, setEntryList] = useState(
        [
            {
                name:'hi',message:'hi message'
            }
        ]
    ); 

    const store = {
        data:[entryData,setEntryData],
        entrylist:[entryList,setEntryList]
    }

    return (
        <SelectedContext.Provider value={store}>
            {props.children}
        </SelectedContext.Provider>
    )
}
