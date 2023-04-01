import React from 'react'
import Handel from '../imgs/handeel.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-things'>
            <ul>
                <h1>Services</h1>
                <li><i class="fa-solid fa-check"></i> Promo 1</li>
                <li><i class="fa-solid fa-check"></i> Promo 2</li>
                <li><i class="fa-solid fa-check"></i> Promo 3</li>
                <li><i class="fa-solid fa-spinner"></i> Promo 4</li>
            </ul>
            <ul>
                <h1>Contact us</h1>
                <li><i class="fa-solid fa-location-dot"></i> Casablanca, ain chouq</li>
                <li><i class="fa-solid fa-envelope"></i>handel@investment.com</li>
                <li><i class="fa-solid fa-phone"></i>+212 781 22 12 54</li>
            </ul>
        </div>
        <div className='social'>
            <img src={Handel} alt="" />
            <div className='social-media'>
              <a href='https://www.instagram.com/handel.investment/' target='_blanck'><i class="fa-brands fa-instagram"></i></a>
              <a href='https://web.facebook.com/profile.php?id=100087953554070' target='_blanck'><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
      <div className='copy-right'>
        2023 * All rights reserved, Handel investment &#169;
      </div>
    </div>
  )
}

export default Footer
