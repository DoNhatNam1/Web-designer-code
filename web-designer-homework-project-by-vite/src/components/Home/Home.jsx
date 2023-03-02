import React ,{ useEffect } from 'react'
import './home.css'
import video2 from '../../assets/video(2).mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { SiZalo } from 'react-icons/si'
import { BsListTask} from'react-icons/bs'
import { FaGooglePlay} from'react-icons/fa'
import { TfiGoogle } from'react-icons/tfi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
useEffect(() =>{
  Aos.init({
    duration: 2000
  })
}, [])
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src= {video2} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        {/* <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className=" icon " />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon " />
            <span>MORE FILTERS</span>
          </div>
        </div> */}

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon " />
            <AiFillInstagram className="icon " />
            <SiZalo className="icon " />
            < TfiGoogle className="icon " />
          </div>

          <div className="leftIcons">
          <BsListTask className="icon " />
            <FaGooglePlay className="icon " />
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Home