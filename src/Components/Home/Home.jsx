import React, {useState, useEffect} from 'react';
import "./Home.scss"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Home = (props) =>{
  const [regPop, setRegPop] = useState(false);

  useEffect(()=>{
    if(regPop){
      var timer = setTimeout(()=>{
        handleRegPopClose();
      }, 2500)
    }
    return ()=>{
      clearTimeout(timer)
    }
  }, [regPop])

  const handleRegPopup = ()=>{
    setRegPop(true);
    const firstTimer = setTimeout(()=>{
      document.getElementById('regPopWall').style.opacity = 1;
    }, 200)

  }
  
  const handleRegPopClose = ()=>{
   document.getElementById('regPopWall').style.opacity = 0;
   const secondTimer = setTimeout(()=>{
    setRegPop(false)
   }, 500)
  }

  return (
    <main className="Home__all">
    <section className="Home__section" >
      <div className="Home__content">
        <h1 className="Home__title">{props.Home_data.title}</h1>
        <p className="Home__date">{props.Home_data.date}</p>
        {/* <p className='no-register'>*Registrations Opening Soon</p> */}
        <div className="CTAs_Home">
        {/* {props.Home_data.cta.map((cta, index)=>(
          <>
          {cta.href.includes('#') ? 
          (
            <HashLink to={cta.href}  key={index} className={`Home_CTA${index % 2 === 0 ? "_main" : "_secondary"}`}>{cta.name}</HashLink>
          ):
          (
            <Link to={cta.href}  key={index} className={`Home_CTA${index % 2 === 0 ? "_main" : "_secondary"}`}>{cta.name}</Link>
          )}
          </>

        ))} */}

        <div onClick={handleRegPopup} className='Home_CTA_main'>
        {props.Home_data.cta[0].name}
        </div>

        </div>
      </div>
    </section>
        {regPop &&(
          <main style={{opacity: 0}} className="regPopWall" id="regPopWall" onClick={handleRegPopClose}>
            <div className="regPopBox" >
              <div className="RegPop__textContainer">
                <img src="/img/logo/channel-sec-logo-no-strap.svg" alt="channel-sec logo" />
              <h2 className='regPopupText'>Registrations Coming Soon.</h2>
              </div>
            </div>
          </main>
        )}
    </main>
  )
}
