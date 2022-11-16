import React from 'react';
import './Text_Box.scss';
import { Link } from 'react-router-dom';

export const Text_Box = (props)=>{
 
  return(
  <div className="Text_Box_container" >
    <div className="Text_Box__content">
      <h3 className={`Text_Box-header Text_Box_header-${props.heading.toLowerCase()}`}>{props.heading}</h3>
      <article className="Text_Box_body-text">
        {props.text_array.map((paragraph)=>(
          <p key={Math.random() * 9 **99} className="Text_Box__paragraph">{paragraph}</p>
        ))}
      </article>
      <div className="Text_Box__CTAs">
        {props.CTAs.map((CTA, index)=>(
          <Link to={CTA.href} key={Math.random() * 9 **99}  className={`Text_Box__CTA Text_Box__CTA-${index%2===0?'primary': 'secondary'}`}>
            {CTA.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}