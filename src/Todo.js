import React, { useState } from 'react';
import image from '../src/images.png';
const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const[toggleSubmit , setToggleSubmit] = useState(true);
  const[isEditItem , setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data");
    }
    else if(inputData && !toggleSubmit){
      setItems(
        items.map((elem)=>{
          if(elem.id === isEditItem){
            return{...elem,name:inputData};
          }
          return elem;
        })
      )
      setToggleSubmit(true);

      setInputData(' ');
  
      setIsEditItem(null);
    } 
    else {
      const allInputData = { id: new Date().getTime().toString(), name: inputData }
      setItems([...items, allInputData]);
      setInputData('');
    }
  }
  const deleteItem = (index) => {
    // console.log(id);
    const updateItems = items.filter((elem) => {
      return index != elem.id;
    });
    setItems(updateItems);
  }
  const editItem = (id) => {
    let newEditItem = items.find((elem)=>{
        return elem.id == id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  }
  const removeAll = () => {
    setItems([]);
  }
  return (
    <div className='outer-box'>
      <div className='inner-box'>
        <figure>
          <img src={image} alt="textImage" />
          <figcaption>Add Your List Here✌</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='✍ Add Items...' value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
          {
            toggleSubmit?<span><i class="fa fa-plus add-btn" title='Add Item' onClick={addItem} /></span>:<span><i class="fa fa-edit add-btn" title='Edit Item' onClick={addItem} /></span>
          }
        </div>
        <div className='showItems'>
          {
            items.map((elem) => {
              return (
                <>
                  <div className='eachItem' key={elem.id}>
                    <h3>{elem.name}<span><i class="fa fa-edit edit-btn" title='Edit Item' onClick={() => editItem(elem.id)}></i></span><span><i class="fa fa-trash del-btn" title='Delete Item' onClick={() => deleteItem(elem.id)}></i></span></h3>
                  </div>

                </>
              );

            })
          }
        </div>
        <div className='showItems'>
          <button className='myButton' data-sm-link-text="Remove All" onClick={removeAll}>REMOVE ALL</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;