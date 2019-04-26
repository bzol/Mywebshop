import React from 'react'

const Cart = (props) => {
  
  var addItem = (product) => {
    props.addItemToCart(product);
  }
  return (
    <div>

      <ul>
        {/* {
          props.cartItems.map(element => {
            return (
              <li> {element.product.name} {element.quantity}
                <button onClick={addItem(element.product)}>+</button>
              </li>
            )
          })
        } */}
      </ul>
    </div>
  )
}
export default Cart