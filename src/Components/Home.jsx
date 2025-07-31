import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskCard from './TaskCard';

function Home() {
    const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [taskName, setTaskName] = useState('');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const handleAdd = () => {
  const unnamedCount = tasks.filter(task => task.name.startsWith("Unnamed")).length;
    const newTask = {
      id: Date.now(),
      name: taskName || `Unnamed ${unnamedCount+1}`,
      description: '',
      status: 'active',
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setTaskName('');
  };

  const handleDelete = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleStatusToggle = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'active' ? 'done' : 'active' } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });
  return (
    <>
    <div data-aos="fade-up" className="container mt-5">
      <h1 className='text-center mt-3'>TO-DO LIST</h1>
      <div className="adding">
        <input
          type="text"
          value={taskName}
          placeholder="Enter a new task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className='btn-add ms-2' onClick={handleAdd}>Add</button>
        <div className="filters">
          <button className={filter==="all"?'active':""} onClick={() => setFilter('all')}>All</button>
          <button className={filter==="active"?'active':""} onClick={() => setFilter('active')}>Active</button>
          <button className={filter==="done"?'active':""} onClick={() => setFilter('done')}>Completed</button>
        </div>
      </div>

      <div data-aos="fade-up" className='mainsec mt-5 container '>

         <div className="cards container row mx-auto">
        {filteredTasks.map(task => (
          <div className='col-xl-3 col-lg-4 col-md-6 '>
             <TaskCard 
            key={task.id}
            task={task}
            onDelete={() => handleDelete(task.id)}
            onToggleStatus={() => handleStatusToggle(task.id)}
            onEdit={() => navigate(`/edit/${task.id}`)}
            onView={()=>navigate(`/view/${task.id}`)}
          />
          </div>
         
        ))}
      </div>


      </div>

     
    </div>
    </>
  )
}

export default Home