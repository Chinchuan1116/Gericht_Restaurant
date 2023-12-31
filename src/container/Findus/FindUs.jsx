import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>68 Royal Hospital Road, Chelsea London SW3 4HP</p>
        <p className='p_cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Monday - Friday @ 12:00pm - 11:30am</p>
        <p className='p__opensans'>Saturday - Sunday @ 12:00pm - 12:00am</p>
      </div>
      <button type='button' className='custom__button'>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us"/>
    </div>
  </div>
);

export default FindUs;
