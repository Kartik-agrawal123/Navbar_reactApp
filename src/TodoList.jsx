import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ListComp from './ListComp';
import { List } from '@material-ui/core';

const TodoList = ()=>{

    const[item,setItem] = useState("");
    const[newitem,setNewItem] = useState([]);

    const itemEvent = (event)=>{
        setItem(event.target.value);
    }
    const listOfItem = ()=>{
        setNewItem((preValue)=>{
            return[...preValue,item];
        });
        setItem(" ");
    }
    return(
        <>
            <div className='outer-box'>
                <div className='inner-box'>
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input 
                    type="text" 
                    value={item} 
                    placeHolder="Add an Items"
                    onChange={itemEvent}
                    />
                    <button  onClick={listOfItem}> 
                    <AddIcon/>
                     </button>
                    <br/>
                    <ol>
                        {newitem.map((val , index)=>{
                            return <ListComp  key = {index} text = {val}/>;
                        })}
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
};
export default TodoList; 