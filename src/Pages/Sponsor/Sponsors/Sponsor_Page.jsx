import React from 'react'
import {Page_Header} from '../../../Components/Page_Header/Page_Header.jsx'
import { Sponsors } from './Sponsors'
import { sponsors } from './sponsors_data.js'
import { Enquiry_Form } from '../../../Components/Enquiry_Form/Enquiry_Form.jsx';
import './Sponsor_Page.scss'
import { Contact } from '../../../Components/Contact/Contact.jsx';
import { Why_sponsor } from '../../../Components/Why_Sponsor/Why_sponsor.jsx';

export const Sponsor_Page = (props)=> {
return (
<>
    <Page_Header title={'Why Sponsor'} offset={props.offset} />
    <section className='Sponsor_Page__container' >
        <div className='Sponsor_Page__text'>
            <Why_sponsor/>
        </div>
        <div className="Sponsor_page_form">
        <Enquiry_Form />

        </div>
    </section>
    <Sponsors sponsors={sponsors} />
    <Contact/>
</>
)
}