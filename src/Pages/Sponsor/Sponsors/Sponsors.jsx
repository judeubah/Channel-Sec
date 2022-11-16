import React from 'react';
import './sponsors.scss';
export const Sponsors = (props) =>{
  return(
    <section  className="sponsors-page">
     {props.sponsors.map((element, index)=>(
       
       <div key={typeof element === 'string' ? element : element[0].key} 
       className={typeof element === 'string' ? "sponsor-catergory-title__container" : "sponsors-container" }>

       {index%2===0 && (
         <span className={"sponsor-catergory-title " + element.replace(" ", "-").toLowerCase() + "-title"}>{element}</span>
       )}
       {index%2!==0 && element.map((sponsor) => (
         <a key={sponsor.key} href={sponsor.href} target="_blank">
          <img className="sponsor-image" src={process.env.PUBLIC_URL + `img/sponsors_images/${sponsor.src}`} alt={sponsor.alt}/>          
         </a>
       ))}
       </div>
     ))}
    </section>
  )
}