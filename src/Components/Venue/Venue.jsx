import React from 'react';
import './Venue.scss'

export const Venue = ()=>{

    return (
        <section className='Venue__section' id='venue'>
            <div className="Venue__text">
                <h2 className='Venue__title'>VENUE</h2>

            <p className='Venue__paragraph'>The venue for this year's event is at the 5 star Royal Lancaster based in London. Come and join
            us, Co-located with the IT Europa Channel Awards.</p>

            <p className='Venue__paragraph'>Royal Lancaster, London.<br/><br /><i className="fas fa-map-marker-alt Venue__icon"></i> Address: Lancaster Terrace,
            Bayswater, London W2 2TY</p>

            <i className="fas fa-globe-europe Venue__icon"></i> <a href="https://www.royallancaster.com/" className='Venue__link'>www.royallancaster.com</a>
            
        </div>
        
    <div className="Venue__Map">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.076789984991!2d-0.17818008422986506!3d51.51180717963596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876054d8222d263%3A0x19e3645d053a4c22!2sLancaster%20Terrace%2C%20Bayswater%2C%20London%20W2%202TY!5e0!3m2!1sen!2suk!4v1611076532537!5m2!1sen!2suk"
        className="Venue__Map_iframe" frameBorder="0"  allowFullScreen="1"></iframe>


    </div>
        </section>

    )
}