import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';
import welcome from '../../assets/welcome.png'
const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Gericht Restaurant is available to be exclusively hired and can accommodate up to 44 guests. Ideal for private parties, corporate dining or wedding receptions for those wanting to celebrate in a truly unique style.</p>
      <button type="button" className='custom__button'>Explore More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={welcome} alt='welcome'/>
    </div>
  </div>
);

export default Header;
