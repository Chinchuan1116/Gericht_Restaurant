import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';
const AwardsCard = ({award:{imgUrl,title,subtitle}})=>(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="Awards"/>
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div> 
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding flex-center' id="awards">
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & recognition"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((awards)=><AwardsCard award={awards}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurals"/>
    </div>
  </div>
);

export default Laurels;
