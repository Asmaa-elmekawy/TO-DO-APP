import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ViewPage() {
    const {id}=useParams()
    const [task,setTask]=useState(null)

    const navigate = useNavigate();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const current = tasks.find(t => t.id === Number(id));
    if (current) {
      setTask(current);
    }
  }, [id]);
  if(!task) return <p>not found</p>;
  return (
    <>
    <div data-aos="fade-up" className='viewsec mt-5'>
    <h1 className='text-center mb-5'>View your task</h1>
    <div className='container col-lg-6 col-md-6 innerviewsec'>
        <div className='content '>
            <div>
              <label style={{color:'#00adf5'}}>Title:</label><br/>
              <p className='ms-1 values'>{task.name}</p>
            </div>
            <div>
              <label style={{color:'#00adf5'}} >Description:</label><br/> 
              <p className='ms-1 values'>{task.description || "No decription yet..."}</p>
            </div>
            <div>
              <label style={{color:'#00adf5'}} >Status:</label><br/> 
              <p className='ms-1 values'>{task.status}</p>

            </div>
            <div className='text-center'>
            <button className='my-5 w-25 rounded btn' onClick={()=>navigate("/")}>OK</button>


            </div>

        </div>
        
    </div>

    </div>
    
    </>
  )
}

export default ViewPage