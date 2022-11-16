import React from 'react';
import './Image_Box.scss';

export const Image_Box = (props)=>{

  return(
    <div className="Image_Box_container" style={{backgroundImage: `url(/img/who_should/${props.back_image})`}}>
    </div>
  )
}