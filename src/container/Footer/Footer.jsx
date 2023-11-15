import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>68 Royal Hospital Road, Chelsea London SW3 4HP</p>
        <p className='p__opensans'>0207 352 4441</p>
        <p className='p__opensans'>0207 592 1373</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="logo"/>
        <p className='p__opensans'> The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt="spoon" style={{marginTop:"15px"}}/>
        <div className='app__footer-links-icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>12:00pm - 11:30am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>12:00pm - 12:00am</p>
      </div>
    </div>
    <div className='footer_copyright'>
      <p className='p__opensans'>About CC @ Restaurant 2022 - All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
