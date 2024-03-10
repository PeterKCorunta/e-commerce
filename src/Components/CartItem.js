// CartItem.js
import React from 'react';

const CartItem = ({ item, id_quantity, deleteCart }) => {
  return (
    <tr key={item.id} className='cartItem_container'>
      <td><h3 className='name_label'>{item.name}</h3></td>
      <td><p className='price_label'>Total Price: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p></td>
      <td><p className='quantity_label'>Quantity: <strong>{item.quantity}</strong></p></td>
      <td><button className='unpack' onClick={()=>{deleteCart(item.name)}}>Delete</button></td>
      <td>🛒</td>
    </tr>
  );
};

export default CartItem;