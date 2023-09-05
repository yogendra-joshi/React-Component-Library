import React from 'react';
import '../style.css';

export default function Cards({ icon }) {
  return (
    <div className='card'>
      <div className='container'>
        <icon className='icon'>{icon}</icon>
        <div className='content'>
          <h2>Easy Deployment</h2>
          <p>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </p>
        </div>
      </div>
    </div>
  );
}
