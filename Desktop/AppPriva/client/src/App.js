import Home from './components/Home';
import AddOwners from './components/AddOwners';
import ProfileOwner from './components/ProfileOwner';
import UpdateOwner from './components/UpdateOwner';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';








function App() {
  
  return (
   
    <div >
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/addOwners" element={<AddOwners/>}/>
    <Route path="/Owner/:id" element={<ProfileOwner/>}/>
    <Route path="/update/:id" element={<UpdateOwner/>}/>
    
    </Routes>
     
    </div>
   
  );
}

export default App;
