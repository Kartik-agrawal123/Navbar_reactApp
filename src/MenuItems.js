import React from 'react';

const MenuItems = ({items}) => {
  return (
    <>
    <div className='dishes'>
                {
                   items.map((elem) => {
                        const { id, name, image, description, category, price } = elem;
                        return (
                            <div className='maggi' category="breakfast" key={id}>
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
  )
}

export default MenuItems;