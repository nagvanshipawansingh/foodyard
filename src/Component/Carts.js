import React, {useState} from 'react'
import './Cards.css';
import Button from '@mui/material/Button';
import Cardsdata from './CardsData';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/Action/Action';

export default function Cards() {
    const [data, setData] = useState(Cardsdata);
    
    const dispatch = useDispatch();

    const sendData = (e) => {
      // dispatch(ADD(e))
      dispatch({
        type: 'ADD_CART',
        payload: e
     })
      
    }
    
  return (
    <div className='cards_main'>
        <h1 className='cards_heading'>Add to cart project</h1>
  
        <div className='cards'>
        {
            data.map((element) => {
            return <div className='card' key={element.id}>
            <img src={element.imgdata} alt="" />
            <h3>{element.rname}</h3>
            <p>Price : <span className='rupees'>₹</span>  {element.price}</p>
            <Button onClick={()=>{sendData(element)}}>Add to cart</Button>
        </div>
       
       }) 
       }
            
        </div>
    </div>
  )
}


