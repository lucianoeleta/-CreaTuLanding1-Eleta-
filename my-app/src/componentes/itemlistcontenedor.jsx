import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{greeting}</h1>
      {/* Aqa se muestra  el catálogo de productos */}
    </div>
  );
}

export default ItemListContainer;
