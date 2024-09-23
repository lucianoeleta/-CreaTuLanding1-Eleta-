import React from 'react';

function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="" alt="Carrito" style={{ height: '24px' }} />
      <span style={{ marginLeft: '8px' }}>3</span> {/* Aca  se podría dinamizar la cantidad de productos */}
    </div>
  );
}

export default CartWidget;
