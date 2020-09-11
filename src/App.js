import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNont'
import Note from './Note';
import { useState } from 'react';

const App = () => {
  const [addItem, setAddItem]= useState([]);
  const addNote = (note) => {
    setAddItem((prevData)=>{
      return [...prevData, note]
    });
    console.log(note);
   }; 
   const onDelete = (id) =>{
     setAddItem((oldData) => 
     oldData.filter((Current, index) =>{
       return id !== index
     }))
   }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val,index)=>{
        return <Note 
        key = { index }
        id = { index }
        title = { val.title }
        contetn = { val.contetn } 
        delete = {onDelete}
        />
      })}
      <Footer />
    </>
  )
}

export default App;