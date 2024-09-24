import React from 'react';

function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/5412/5412512.png" alt="Carrito" style={{ height: '24px' }} />
      <span style={{ marginLeft: '8px' }}>3</span> 
    </div>
  );
}

export default CartWidget;
