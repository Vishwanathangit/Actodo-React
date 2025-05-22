import React, { act, useState } from 'react'
import Addtodoform from './Addtodoform'
import ToDoList from './ToDoList'

const Todocontainer = () => {
        const [activityarr, setactivityarr] = useState([
        {
            id:1,
            activity:"Go for a Walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a Shower"
        }
    ])
    return (
        <div>
            <div className='flex gap-5 flex-wrap'>
              <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr}/>
              <ToDoList activityarr={activityarr} setactivityarr={setactivityarr}/>
            </div>
        </div>
    )
}

export default Todocontainer
