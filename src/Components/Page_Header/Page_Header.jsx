import React from 'react';
import "./Page_Header.scss"
export const Page_Header = (props) =>{
  const title = props.title;
  return(
    <section className="Page_Header__container"  style={{ backgroundImage: `url(/img/page_header/page_header.png)`, marginTop:`${props.offset}px` }}>
    <p className="Page_Header-title">{title}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#FFF" d="…"></path>
  </svg>
    </section>    
  )
}