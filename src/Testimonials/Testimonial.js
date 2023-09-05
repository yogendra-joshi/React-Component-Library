import React from 'react';
import '../style.css';
import wclogo from '../assets/wclogo.png';

export default function Testimonial() {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-content'>
        <img src={wclogo} alt='Logo' className='testimonial-logo' />
        <p>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </p>
        <h5>May Andersons / Workcation, CTO</h5>
      </div>
    </div>
  );
}
