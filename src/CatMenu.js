import React from 'react';

const CatMenu = ({filterItem,catItems}) => {
    return (
        <>
            <div className='btn'>
            {
                catItems.map((currElem,index)=>{
                     return <button  key = {index} onClick={() => filterItem(currElem)}>{currElem}</button>
                })
            }
                {/* <button onClick={() => filterItem('breakfast')}>BreakFast</button>
                <button onClick={() => filterItem('lunch')}>Lunch</button>
                <button onClick={() => filterItem('evening')}>Evening</button>
                <button onClick={() => filterItem('dinner')}>Dinner</button>
                <button onClick={() => filterItem('timePass')}>Time Pass</button> */}
                {/* <button onClick={() => setItems(Menu)}>All</button> */}
            </div>

        </>
    )
}

export default CatMenu;