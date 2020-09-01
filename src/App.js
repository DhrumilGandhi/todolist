import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDOList';

const App = () => {
  const [inputList, setInput] = useState("");
  const [item, setItem] = useState([]);
  const itemEvents = (event) => {
    setInput(event.target.value);
  };
  const listOfItem = (oldItem) => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInput('');
  };
  const deleteItem = (id) => {
    console.log('deleted');
    setItem((oldItem)=>{
      return oldItem.filter((arrElem, index) =>{
        return id !== index;
      })
    })
};
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>ToDo List</h1><br />
          <input type='text' placeholder='Add Items' onChange={itemEvents} value={inputList} />
          <button onClick={listOfItem} > + </button>

          <ol>
            {
              item.map((itemVal, index) => {
                return <ToDoList 
                key={index} 
                id={index} 
                text={itemVal} 
                onSelect={deleteItem}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;