import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function AddTask() {
   const Navigate=useNavigate()
    const {id}=useParams()

    let [name,setName]=useState('')
    let [description,setDescription]=useState('')

    let handlesubmit=(e)=>{
        e.preventDefault();
        let newTask={
            id: Date.now(),
            name,
            description,
            status:"active"
        
        };

        let savedTasks=JSON.parse(localStorage.getItem("tasks"))||[]
        savedTasks.push(newTask)
        localStorage.setItem('tasks',JSON.stringify(savedTasks))
        Navigate("/")
    }
  return (
    <>
    <div data-aos="fade-up" className='editTask container'>
  <h1 className='mt-4'>Add your task</h1>
</div>

<div data-aos="fade-up" className="mt-2 mb-4 editsec container col-lg-4 col-md-6 col-sm-10 col-8 ">
  <div className=" row justify-content-center">
    <form className=' col-12 col-sm-10 col-md-10 col-lg-10' onSubmit={handlesubmit}>
      
      <div className="form-group mb-3">
        <label>Title</label>
        <input
          className='form-control'
          type="text"
          required
          placeholder="Enter your task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group mt-4">
        <label>Description</label>
        <input
          className='form-control'
          type="text"
          required
          placeholder="Description of task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary w-100" type='submit'>Add Task</button>
      </div>

    </form>
  </div>
</div>

    
    </>
  )
}

export default AddTask