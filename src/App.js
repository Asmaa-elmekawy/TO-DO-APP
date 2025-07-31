import './App.css';
import Navv from './Components/Navv';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import EditPage from './Components/EditPage';
import Home from './Components/Home';
import ViewPage from './Components/ViewPage';
import AddTask from './Components/AddTask';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Navv/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:id' element={<EditPage/>}/>
      <Route path='/view/:id' element={<ViewPage/>}/>
      <Route path='/addtask' element={<AddTask/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
