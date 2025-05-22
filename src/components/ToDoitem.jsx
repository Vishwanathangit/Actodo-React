import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ToDoitem = (props) => {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    function handledelete(deleteid){
         var temparr = activityarr.filter(function(item){
            if(item.id == deleteid){
                return false
            }else{
                return true
            }
         })
         setactivityarr(temparr)
    }
  return (
    <div className='flex justify-between'>
      <p>{props.index+1}. {props.activity}</p>
      <button className='text-red-500 cursor-pointer' onClick={()=>{handledelete(props.id)}}><FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000" }} />
</button>
    </div>
  )
}

export default ToDoitem
