import React from 'react';
import './Promo_Video.scss';
export const Promo_Video = () =>{
  const year = new Date().getFullYear()+1;
  
  return (
    <section className="Promo_Video__section">
      <div className="Promo_Video__box">
      <iframe className="Promo_Video__iframe" src={`https://player.vimeo.com/video/734046003?h=2e6d09a6d6&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=0;`}
      frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
       allowFullScreen  title={`Channel Sec ${year}`}>
      </iframe>
      </div>
    </section>
  )
}