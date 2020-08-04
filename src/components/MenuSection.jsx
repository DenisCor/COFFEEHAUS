import React, { useEffect } from 'react';
import '../MenuSection.css';

const MenuSection = (props) => {
  return (
    <div className='main'>
      <div>
        <h2 className='menuHeader'>{props.title}</h2>
        <div className='menuContainer'>
          <div className='menuItems'>
            <ul>{props.items}</ul>
          </div>
          <div className='menuPrices'>
            <ul>{props.prices}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
