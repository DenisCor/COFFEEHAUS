import React from 'react';

const MenuFooter = () => {
  return (
    <div className='mainMenuHeader'>
      <div className='divsymbol'>
        <img
          src={'menusymbol.png'}
          alt='symbol'
          className='symbol'
          style={{ transform: 'rotate(360deg)' }}
        />
        <hr className='hrfooter' />
        <img
          src={'menusymbol.png'}
          alt='symbol'
          className='symbol'
          style={{ transform: 'rotate(270deg)' }}
        />
      </div>
    </div>
  );
};

export default MenuFooter;
