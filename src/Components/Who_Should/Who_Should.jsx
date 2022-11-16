import React, { useEffect, useState } from 'react';
import {Image_Box} from './Sub_Components/Image/Image_Box.jsx';
import {Text_Box} from './Sub_Components/Text_Box/Text_Box.jsx';
import {Who_Should_Data} from './Who_Should_Data.js';
import './Who_Should.scss';


export const Who_Should = (props) =>{

  const [location, setLocation] = useState('small_filler_image.png')

  useEffect(()=>{
    if(document.documentElement.clientWidth > 850){
      setLocation('filler_image.png')
    }else{
      setLocation('small_filler_image.png')
    }
  }, [document.documentElement.clientWidth])



  return (
    <section className="who-should_container">
      <div className="who-should__title_container">
       <h2 className="who-should_title">Who Should Attend?</h2>
       <div className="orange-divider"></div>
      </div>
      {Who_Should_Data.map((element, index) =>(
       
       <div className={`who-should__row${index%2===0 ? "-reverse":""}`}  key={element.key}>
         <Image_Box 
          back_image={location}
          />
            <Text_Box
            heading={element.heading}
            text_array={element.text}
            CTAs={element.CTA}
            key={element.heading}
            />
        </div>
        
        
      ))}
    </section>
  )
}