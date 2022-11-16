import React from 'react';
import "./About.scss";
import { Promo_Video } from '../Promo_Video/Promo_Video';

export const About = (props) =>{
const id_maker = () =>{
  return Math.random() * 19;
}

const add_animation = ({target},anime) =>{
  const icon = target;
  icon.classList.add(`animate__animated`,`animate__${anime}`)
}
const remove_animation = ({target},anime) =>{
  const icon = target;
  icon.classList.remove(`animate__animated`,`animate__${anime}`)
}
  return (
    <section className="About_Section" id="about_us"> 
      <div className="About__title_container">
        <h2 className="About__title">{props.data.title}
        </h2>
      </div>
      <div className="About_Section__main">
      <article className="About__article">
        {props.data.content.map((para)=>(
          <p className="About__paragraph" key={id_maker()}>{para}</p>
        ))}
      </article>
          <Promo_Video/>
      </div>
      <h3 className="About__topics_header">Topics Include</h3>
      <div className="About__topics_section">
        {props.data.icons.map((topic)=>(
          <div className="About__topic" key={id_maker()}>
            <img src={topic.image} className={`topic_icon`} onMouseOver={(e)=>add_animation(e,topic.animation)} onMouseLeave={(e)=>remove_animation(e,topic.animation)}/>
            <p className="topic__name">{topic.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
};