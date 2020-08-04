import React from 'react';

const MenuHeader = (props) => {
  return (
    <div className='mainMenuHeader'>
      <div className='divsymbol'>
        <img
          src={'menusymbol.png'}
          alt='symbol'
          className='symbol'
          style={{ transform: 'rotate(90deg)' }}
        />
        <hr />
        <img
          src={'menusymbol.png'}
          alt='symbol'
          className='symbol'
          style={{ transform: 'rotate(180deg)' }}
        />
      </div>
      <h1>MENU</h1>
    </div>
  );
};

export default MenuHeader;
