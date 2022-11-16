import React, { useEffect, useState } from 'react';
import './App.scss'
import {keynotes} from './Components/Speakers/speaker_data/key_notes.js';
import {speakers} from './Components/Speakers/speaker_data/speakers.js';
import {Speakers} from './Components/Speakers/Speakers.jsx';
import {morning_agenda_data, afternoon_agenda_data} from './Components/Agenda/agenda_data.js';
import {Agenda} from './Components/Agenda/Agenda.jsx';
import {CTA_Footer} from './Components/CTA-Footer/CTA_Footer.jsx'
import {Contact} from './Components/Contact/Contact.jsx';
import {Who_Should} from './Components/Who_Should/Who_Should.jsx';

import {Home} from "./Components/Home/Home.jsx";
import {home_data} from "./Components/Home/Home_Data.js";
import {Video} from "./Components/Videos/Video.jsx";
import {Video_data} from "./Components/Videos/Video_data.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Sponsor_Page} from './Pages/Sponsor/Sponsors/Sponsor_Page';
import { Nav_Bar } from './Components/Nav_Bar/Nav_Bar';
import Scroll_top from './Components/Scroll_top/Scroll_top';
import { Venue } from './Components/Venue/Venue';
import { About } from './Components/About/About.jsx';
import { About_Data } from './Components/About/About';


export function App(){
  const [offset, setOffset] = useState()
  useEffect(()=>{
    let top_bar_offset = document.getElementById('Nav_Bar').clientHeight;
    setOffset(top_bar_offset)
  }, [])
  return(
    <Router>
    <Route exact path="/">
    <div className="App" style={{marginTop:`${offset}px`}} >
    <Nav_Bar mobile_offset={offset}/>
    <Home Home_data={home_data}/>
    <About data={About_Data}/>
    <Who_Should/>
    <Speakers title="Keynotes - 2022" data={keynotes}/>
    <Speakers title="Speakers - 2022" data={speakers}/>
    <Agenda morning_agenda_data={morning_agenda_data} afternoon_agenda_data={afternoon_agenda_data}/> 

    <Video Video_data ={Video_data}/>
    {/* <CTA_Footer/> */}
    <Venue/>
    <Contact /> 
    </div> 

    </Route>

    <>
    <Scroll_top/>
    <Switch>
    <Route exact path="/sponsor">
    <Nav_Bar mobile_offset={offset} />
    <Sponsor_Page offset={offset}/>
    </Route>

    </Switch>
    
    </>
    </Router>
  )
}