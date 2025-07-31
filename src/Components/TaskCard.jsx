import React from 'react'

function TaskCard({task, onDelete, onToggleStatus, onEdit ,onView}) {
  return (
    <>
    <div  className="cardd mx-auto  px-4 ">
      <label className="custom-radio">
        <input
          type="checkbox"
          checked={task.status === 'done'}
          onChange={onToggleStatus}
        />
        <span className="checkmark"><i className=" fa-solid fa-check icon-check"></i></span>
        <h2 className='container mt-2'>{task.name}</h2>
      </label>
      <p>{task.description || 'No description yet...'}</p>
      <button onClick={onEdit}>Edit</button>
      <button className='mx-1' onClick={onDelete}>Delete</button>
      <button onClick={onView} >View</button>
    </div>
  
    </>
  )
}

export default TaskCard