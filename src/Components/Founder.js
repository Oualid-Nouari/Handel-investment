import React from 'react'
import FounderR from '../imgs/akram.png'
import SmallFounder from '../imgs/small-akram.png'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Founder = () => {
  return (
    <section className='founder' id='founder'>
      <div className='founder-infos'>
        <h1>Our Founder</h1>
        <img src={SmallFounder} alt="" width="200px" height="190px" className='small-founder-img' />
        <h3>Akram Aboulaid</h3>
        <p> 19yo business man, trader and content creator, Chaf Rassou 3ndou Skill Dyal Y3lem Nass Dakchi Li Kay3ref Ydir, W9rr Ydir A7ssan Formation Dyal Trading F'lmghrib <span class="fi fi-ma"></span></p>
        <span><i class="fa-regular fa-envelope"></i> handel@investement.com</span>
      </div>
      <img src={FounderR} alt="" className='founder-img' />
    </section>
  )
}

export default Founder
