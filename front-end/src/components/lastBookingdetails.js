import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import '../Css/lastBookingdetails.css'
import BsContext from '../Context/BScontext'

const lastBookingdetails = () => {
  const context=useContext(BsContext)
  const{lastBookingDetails,handleGetBooking}=context  
  useEffect(()=>{
    handleGetBooking()
  },[])

  return (
    <div className='last_Booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
      {
        lastBookingDetails?(
          <>
           <div className='seats_container'>
      <p className='seats_header'>Seats:</p>
      <ul className='seats'>
        {seats.map((seats,index)=>(
          <li className='seat_value' key={index}>
            {seats}:{Number(lastBookingDetails.seats[seats])}
          
          </li>

        ))}
      </ul>

    </div>
    <p className='slot' style={{textAlign:"left"}}>Slot:<span></span></p>
    <p className='movie'>Movie:<span>{lastBookingDetails.movie}</span></p>


          </>
        ):(
          <p className='no_previous'>No previous booking</p>

      )
      }
   
    </div>
  )
}

export default lastBookingdetails
