import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../slices/cartslice';

const Cart = () => {

  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {
        cartItem.map((item) => (
          <div style={{height:'500px', width:'300px'}}>
            <img src={item.image} alt="product-img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button style={{height:'50px',width:'100px', backgroundColor:'gray',color:'white'}}onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
