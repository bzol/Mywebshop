import CheckoutPanel from './CheckoutPanel';
import React from 'react';
import Cart from './Cart/cart';
import {DefaultDiv} from './style.jsx';

const Sidebar = props => {
  return (
    <DefaultDiv>
      <Cart
        cartItems={props.cartItems}
        addItemToCart={props.addItemToCart}
        removeItemFromCart={props.removeItemFromCart}
      />
      <CheckoutPanel cartItems={props.cartItems} />
    </DefaultDiv>
  );
};
export default Sidebar;
