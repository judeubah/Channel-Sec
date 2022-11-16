import React, {useState} from 'react';
import './Agenda.scss';
export const Agenda = (props)=>{  
  let [time, setTime] = useState("morning")

  return(
    <section className="agenda-page" id='agenda'>
      <div className="agenda-page__container">
      <div className="agenda-title__container">
        <h2 className="agenda-page-title">Agenda</h2>
      </div>
      <div className="agenda-content__container">
      <div className="day_buttons">
       <button onClick={()=>setTime("morning")} className="agenda_morning_button">Morning</button>
       <button onClick={()=>setTime("afternoon")} className="agenda_afternoon_button">Afternoon</button>
      </div>
      {props[`${time}_agenda_data`].map(item =>
        <div key={item.key} className="agenda-item">
          <span className="agenda-time">{item.time}</span>
          <div className="agenda-article">
            <h3 className="agenda-item-title">{item.title}</h3>
            {item.extra_info && (
              <p className="agenda-item-description">{item.extra_info}</p>
            )}
          </div>
        </div>
      )}
        
      </div>
      <p className="agenda-closing-remark">Speaker and timings subject to change</p>
      </div>
    </section>
  )
};