import React, { useState } from 'react'

const Addtodoform = (props) => {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const [newactivity, setnewactivity] = useState("")
    function handlechange(event){
     setnewactivity(event.target.value)
    }
    function addactivity(){
      setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
      setnewactivity("")
    }
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Manage Activites</h1>
            <div>
                <input value={newactivity} onChange={handlechange} type="text" className='border bordder-black bg-transparent p-1' placeholder='Next Activity ?' />
                <button onClick={addactivity} className='bg-black text-white p-1 border border-black cursor-pointer'>Add</button>
            </div>
        </div>
    )
}

export default Addtodoform
