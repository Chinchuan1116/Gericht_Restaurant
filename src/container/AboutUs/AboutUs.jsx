import React from 'react';
import { images } from '../../constants';
import G from '../../assets/G.png'
import './AboutUs.css';
import spoon from '../../assets/spoon.png'
import knife from '../../assets/knife.png'
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={G} alt="G letter"/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>
          About Us
        </h1>
        <img src={spoon} alt="spoon" className='spoon_img'/>
        <p className='p__opensans'>Now in it's 21st year of holding three Michelin-stars, Kelvin’s flagship restaurant provides elegant modern French cuisine using the finest seasonal ingredients and employing both classic and modern techniques.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={knife} alt="knife"/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>
          Our History
        </h1>
        <img src={spoon} alt="spoon" className='spoon_img'/>
        <p className='p__opensans'>In 1998, at the age of 31, Kelvin set up his first wholly owned restaurant, Gericht Restaurant, in Chelsea. Combining an intimate ambience with exquisite French cuisine. By 2001 the restaurant had gained three Michelin stars, which the establishment retains today.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
