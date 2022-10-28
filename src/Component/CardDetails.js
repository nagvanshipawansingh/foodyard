import React, { useState, useEffect } from 'react'
import './CardDetails.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../Redux/Action/Action';
import { ADD , removeQnty } from '../Redux/Action/Action';



export default function CardDetails() {

  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Add item 

 

  const AddItem = (e) => {
    dispatch(ADD(e))
    
  }


  const deleteCart = (id) =>{
    dispatch(Delete(id))
    navigate('/')
  }

  const RmvQnty = (ele) => {
    dispatch(removeQnty(ele))
    
  }

    
  const {id} = useParams();
  
  const getData = useSelector((state) => state.cartReducer)
  const compare = ()=> {
    let compareData = getData.carts.filter((elem) => {
        return elem.id === parseInt(id)
        
    })
    setData(compareData);
  }

  useEffect(()=>{
    compare();
  }, [id])


  return (
    <div className='cardDetails_main'>
      <h1>Items Detail page</h1>
      {
        data.map((elem) => {
          return (
            
      <div className='cardDetails' key={elem.id}>
            <div className='cardDetails_img'>
         <img src={elem.imgdata} alt="" />
      </div>
      <div className='cardDetails_items'>
      <div className='cardDetails_left'>
        <p className='rest_details'><strong>Restaurant: </strong>{elem.rname}</p>
        <p className='items_detail'><strong>Price :</strong>₹ {elem.price}</p>
        <p className='items_detail'><strong>Dishes :</strong>{elem.address}</p>
        <p className='items_detail'><strong>Total:</strong>₹ {elem.price*elem.qnty}</p>
        <div className='button'>
          <Button onClick={elem.qnty <=1 ? ()=> deleteCart(elem.id) :()=> RmvQnty(elem)}>-</Button>
          <p className='counte'>{elem.qnty}</p>
          <Button onClick={() => AddItem(elem)}>+</Button>
        </div>
      </div>
      <div className='cardDetails_right'>
        <p><strong>Rating:</strong> <span className='rating'>{elem.rating}★</span> </p>
        <p><strong>Order Review:</strong>{elem.somedata}</p>
        <div className='remove'>
        <p><strong>Remove:</strong> </p>
        <DeleteIcon className='removeIcon' onClick={()=> deleteCart(elem.id)} />
        </div>
      </div>
       </div>
      </div>
            
          )
        })
      }
      

    </div>
  )
}
