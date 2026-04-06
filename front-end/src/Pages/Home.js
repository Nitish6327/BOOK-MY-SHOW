import React, { useContext } from 'react'
import SelectMovie from '../components/SelectMovie'
import LastBookingdetails from '../components/lastBookingdetails'
import TimeSchedule from '../components/TimeSchedule'
import SelectSeats from '../components/SelectSeat'
import '../Css/home.css'
import BsContext from '../Context/BScontext'

const Home = () => {
  const context=useContext(BsContext)
  const{
    movie,
    time,
    noOfseat,
    handlePostBooking,
    setErrorPop,
    setErrorMessage,


      
  }=context
  const handleBookNow=()=>{
    if(!movie){
      setErrorPop(true)
      setErrorMessage("Please select a movie")
    }else{
      handlePostBooking()
    }
    
  }
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
          <SelectMovie/>
        </div>

        <div className='last_booking_details_container'>
          <LastBookingdetails/>
        </div>
      </div>

      <div className='time_seats_container'>
        <TimeSchedule/>
        <SelectSeats/>
        <button className='BN-btn'>Book Now</button>
      </div>
    </div>
  )
}

export default Home