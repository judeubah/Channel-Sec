import React from 'react'
import './Nav_Bar.scss';
import {  Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export const Nav_Bar = (props)=>{
    
    const handleBurger = ()=>{
        const mobile_nav = document.getElementById('mobile_nav_container')
        let left = mobile_nav.style.left
        
        if (left != `100%`){
            mobile_nav.style.left = `100%`
        }
        else{
            mobile_nav.style.left = `0%`
        }
    }
    console.log(props)

    return(

        <section className='Nav_Bar__section' id="Nav_Bar">
            <Link to="/">
            <img src='/img/logo/channel-sec-logo-no-strap.svg' className="Nav_Bar__logo" alt="" />            
            </Link>
            <div className="Nav_Bar_links">
                <HashLink className='Nav_Bar__Link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#about_us">About Us</HashLink>
                <HashLink className='Nav_Bar__Link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#agenda">Agenda</HashLink>
                <Link className='Nav_Bar__Link' to='/sponsor'>Sponsor</Link>
                <HashLink className='Nav_Bar__Link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#Keynotes-container">Keynotes</HashLink>
                <HashLink className='Nav_Bar__Link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#venue">Venue</HashLink>
               
            </div>
            <div class="burger-menu" onClick={handleBurger}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
                <div className="mobile_nav" id="mobile_nav_container" onClick={handleBurger} style={{left: `100%`, top: `${props.mobile_offset}px`}}>
                <div className="mobile_nav_links">
                <HashLink  className='Nav_Bar__Link mobile_link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#about_us">About Us</HashLink>
                <HashLink  className='Nav_Bar__Link mobile_link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#agenda">Agenda</HashLink>
                <Link  className='Nav_Bar__Link mobile_link' to='/sponsor'>Sponsor</Link>
                <HashLink  className='Nav_Bar__Link mobile_link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#Keynotes-container">Keynotes</HashLink>
                <HashLink  className='Nav_Bar__Link mobile_link' scroll={el => el.scrollIntoView({  block: 'start' , inline:'nearest'})} to="/#venue">Venue</HashLink>

                </div>
               


            </div>
            
        </section>
    )
}