import React from 'react'
import '../App.css'
import catv from '../assets/catT.mp4'


const Home = () => {
  return (
    <>
      <div className='body'>
     
        <video src={catv} autoPlay loop muted/>

      </div>
    </>

  )
}

export default Home