import React from 'react';
import "./CTA_Footer.scss"
const event = `Channel Sec ${new Date().getFullYear()}`;
const main_CTA = "Register"

export const CTA_Footer = (props) =>{
  return(
    <section className="CTA__container" style={{ backgroundImage: `url(${require('./hero-bg-img.jpg')})` }}>
      <div className="CTA-content__container">
        <h2 className="CTA__CTA">{main_CTA} for {event}</h2>
        <p className="CTA-more-info"> <span className="light-accent text-attention">THE</span> SECURITY EVENT FOR THE EUROPEAN IT CHANNEL</p>
        <a className="CTA-link" href="https://www.channel-sec.com/" target="_blank">{main_CTA} <span className="text-attention">now</span></a>
      </div>
    </section>
  )
}