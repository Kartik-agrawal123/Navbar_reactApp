import React, { useState } from 'react';
import './index.css';
import Menu from './Menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const GalleryReact = () => {

    const allCatValues = [...new Set(Menu.map((currElem)=> currElem.category)),"all"];
    console.log(allCatValues);

    const [items, setItems] = useState(Menu);
    const[catItems,setCatItems] = useState(allCatValues);

    const filterItem = (categItem)=>{
        if(categItem === "all"){
            setItems(Menu);
            return;
        }
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
            <CatMenu filterItem = {filterItem} catItems = {catItems}/>
            <MenuItems items = {items}/>
        </>
    );
}

export default GalleryReact;