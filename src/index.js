import React from 'react';
import ReactDOM from 'react-dom/client';
import BadgesBtn from './Badges/BadgesBtn';
import Banners from './Banner/Banners';
import Cards from './Card/Cards';
import { BsCloudUpload } from 'react-icons/bs';
import Testimonial from './Testimonials/Testimonial';

function App() {
  return (
    <main className='main'>
      <BadgesBtn color='red' shape='pill' />

      <Banners
        status='success'
        title='Congratulations!'
        desc='deLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.sc'
        showDesc={false}
      />

      <Cards icon={<BsCloudUpload />} />

      <Testimonial />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
