import React, {useState} from 'react';
import './why_sponsor.scss';
import {generalData} from "./why_sponsor_data.js";
export const Why_sponsor = (props) =>{


const context = "why-sponsor";
  return(
    <section className= {`${context}-wrapper`} id={context}>
     <div className={`${context}-container`}>
       
        <article className={`${context}-article`}>
          <p className={`${context}-article-description`}>
          If you are a hardware and software vendor, service provider, ISV, distributor, hosting and datacentre provider, cloud service provider or any other organisation involved in security services delivered to end-users via the channel, then this is the perfect event for you.
          </p>
           <h3 className={`${context}-article-heading`}>The event will help provide opportunities to:</h3>
          {generalData.map(item =>(
            <div key={Math.random() * 9**88} className={`${context}-article-checklist-item`}>
              <i className="fa-solid fa-circle-check why-sponsor-tick"></i>
              <p className={`${context}-article-checklist-text`}>{item}</p>
            </div>
          ))}         
        <h3 className={`${context}-secondary-header`}>
        This event will offer a forum for 
          <span className="accent-orange"> developing understanding </span>
         - from the changing nature of the threat and <span className="accent-orange">identifying new opportunities</span> to <span className="accent-orange">building a sound business model</span>
          
        </h3>
        </article>
     
      </div>
    </section>
  )
  
}
