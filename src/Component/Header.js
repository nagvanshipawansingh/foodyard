import React, { useEffect, useState } from 'react'
import './Header.css';
import {Link, NavLink} from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '../Redux/Action/Action';


export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)

  const getData = useSelector((state) => state.cartReducer)
 
  
  const dispatch = useDispatch();

  const deleteCart = (id) =>{
    dispatch(Delete(id))
  }

  const total = () => {
    let price = 0;
    getData.carts.map((ele,k) =>{

      price = ele.price *ele.qnty + price
    })
    setTotalPrice(price)
  }

  useEffect(() => {
    total();
  },[total])





  return (

    <div className='header'>
      <div className='header_left'>
        <Link to='/cart' >Add to cart</Link>
        <Link to='/'>Home</Link>
      </div>
      <div className='header_cart'>
        <Badge badgeContent={getData.carts.length} color="primary">
          <ShoppingCartSharpIcon onClick={() => setShowCart(!showCart)} className='header_cart' />
        </Badge>
        {showCart ? (
          getData.carts.length ? <div className='header_showCart'>
            <div className='header_cartDetailsTitle'>
              <h3>Photo</h3>
              <h3>Restaurent Name</h3>

            </div>
            <hr />
            {
              getData.carts.map((element) => {
              
                return (
        
                  <div className='header_cartDetails' key={element.id}>
                  {console.log(element.id)}
                  <NavLink to={`/cart/${element.id}`} onClick={() => setShowCart(false)} >
                  <div className='cartDetails_img'>
                    <img  src={element.imgdata} alt="" />
                    </div></NavLink>
                    <div className='cartDetails_para'>
                      <p>{element.rname}</p>
                      <p>Price : ₹ {element.price}</p>
                      <p>Quantity : {element.qnty}</p>
                    </div>
                    <div className='cartDetails_removeIcon'>
                      <DeleteIcon onClick={()=> deleteCart(element.id)}/>
                    </div>
                  </div>
                
               )
                  

              })
            }
           
           
            <p className='cart_TotalPrice'>Total : <span className='rupeesSymbol' >₹</span>  {totalPrice}</p>



          </div>
            : <div className='header_showCart'>
              <div className='header_showCartClr'>

                <ClearIcon onClick={() => setShowCart(false)} />
              </div>

              <div className='header_showCartItems'>
                <p>This card is empty</p>
                <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" alt="" />
              </div>

            </div>) : null}



      </div>


    </div>



  )
}
