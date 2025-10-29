import React from 'react';
import './Campus.css';
import galeri1 from '../../assets/galeri1.png';
import galeri2 from '../../assets/galeri2.png';
import galeri3 from '../../assets/galeri3.png';
import galeri4 from '../../assets/galeri4.png';
import Arrow from '../../assets/Arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      <div className='galeri'>
        <img src={galeri1} alt="" />
        <img src={galeri2} alt="" />
        <img src={galeri3} alt="" />
        <img src={galeri4} alt="" />
      </div>
      <button className='btn dark-btn'>
        See more here <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
