import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const[name,setName]=useState('')
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const current = tasks.find(t => t.id === Number(id));
    if (current) {
      setTask(current);
      setName(current.name)
      setDesc(current.description);
    }
  }, [id]);

  const handleSave = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = tasks.map(t =>
      t.id === Number(id) ? { ...t, description: desc,name:name } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updated));
    navigate('/');
  };

  if (!task) return <p>Task not found</p>;
  return (
    <>
    <div data-aos="fade-up" className='editTask'>
      <h1 className='my-5'> Edit your task</h1>
    </div>
    <div data-aos="fade-up" className=" editsec container col-lg-4 col-md-6 col-sm-10 col-8">
      <div className='row mt-5'>
        <div class="editName justify-content-center ">
                <label>Title</label><br/>
                <input className='col-10 col-sm-10 col-md-10 col-lg-10'  type="text" placeholder=""
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
                </div>
                <div class="description ">
                 <label>Description</label><br/>
                 <input className='col-10 col-sm-10 col-md-10 col-lg-10'  type="text" placeholder="Description of task"
                 value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                   rows="5"></input>
                </div>
                <div className=" change-div">
                <button onClick={handleSave} class="change-btn w-75" >Save changes</button>
                </div>
      </div>
                
     
    </div>
    </>
  )
}

export default EditPage