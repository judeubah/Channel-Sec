import React from 'react';
import {contacts} from '../General/contact_data';
import './Contact.scss'
export const Contact = (props) =>{
   const displace_background = (event)=>{
    const primary_element = document.getElementsByClassName('Contact_Container')[0];
    let relative_width = event.clientX;
    let relative_height = event.clientY;
    let box_width = primary_element.clientWidth;
    let box_height = primary_element.clientHeight;
    let x_displacement = (relative_width/box_width) *75;
    let y_displacement = (relative_height/box_height) *500;
    primary_element.style.backgroundPosition = `${x_displacement}% ${y_displacement}%` 
  }
  return(
    <section className="Contact_Container" onMouseMove={displace_background}>
      <h2 className="Contact_title">Contact</h2>
      <div className="Contact__contacts_container">
      {contacts.map(contact =>(
         <div key={contact.email} className="Contact__contact">
                <h3 className="Contact__department-heading">For 
                 {contact.department.toLowerCase()==='sales' ? ' Sponsorship ' : ' Event Operations Enquiries '}
                   Contact:</h3>
                <div className="Contact__contact_container">
                  <p className="Contact__contact_name">{contact.name}</p>
                </div>
                <div className="Contact__contact_container">
                  <p className="Contact__contact_title">{contact.title}</p>
                </div>
                <div className="Contact__contact_container email-container">
                  <i className="fa-solid fa-envelope"></i>
                  <a href={`mailto:${contact.email}?subject=Channel-Sec:${contact.department.toLowerCase() === "sales" ? "Sponsorship" : "Events/Operations"} enquiry.`}
                    className="Contact__contact_email">{contact.email}</a>
                </div>
                <div className="Contact__contact_container">
                    <i className="fa-solid fa-phone"></i>
                  <p className="Contact__contact_Phone-number">{contact.phone}</p>
                </div>
          </div>
      ))}
      </div>
    </section>
  )
}

