import React from 'react'
import SelectMovie from '../components/selectMovie'

const Home =()=>   {
  return (
    <div className='container'>
      <div className='wrapper'>
      <div className='select_movie_component'>
      <SelectMovie/>
      </div>
      <div className='last_booking_details_container'>
        Last Booking
        
      </div>
      </div>
      <div className='time_seats_container'>
        Time schedule
        select seats
        <button>Book Now</button>
      </div>
      
    </div>
  )
}

export default Home
