import React, { useState } from 'react'
import './index.css';
import Menu from './Menu';

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);

    const filterItem = (categItem)=>{
        const updatedItems = Menu.filter((currElem)=>{
                return currElem.category === categItem;
        });
        setItems(updatedItems);
    }
    return (
        <>
            <div className='top-nav'>
                <h1>Order Your Favourite Dish</h1>
            </div>
            <div className='btn'>
                <button onClick={()=>filterItem('breakfast')}>BreakFast</button>
                <button onClick={()=>filterItem('lunch')}>Lunch</button>
                <button onClick={()=>filterItem('evening')}>Evening</button>
                <button onClick={()=>filterItem('dinner')}>Dinner</button>
                <button onClick={()=>setItems(Menu)}>All</button>
            </div>
            <div className='dishes'>
                {
                    items.map((elem) => {
                        const { id, name, image, description, category, price } = elem;
                        return (
                            <div className='maggi' category="breakfast">
                                <img src={image} alt={name} />
                                <div className='content'>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <h4>Price : {price}<span><button>OrderNow</button></span></h4>
                                    <p>*Price may vary on selected date</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </>
    );
}

export default GalleryReact;