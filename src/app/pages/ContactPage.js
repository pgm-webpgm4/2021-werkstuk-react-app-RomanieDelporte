import React from 'react';

import './ContactPage.scss';

import contactpage from '../assets/images/marianilahair.jpg'
// contactpagina
const ContactPage = ({children}) => {

  
  
  return (
  <div className="contact">
      <div className="container">
        <div className="row">
            <div className="col-6">
              <div className="contact__page">
                <img src={contactpage} alt=""/>
                </div>
            </div>
            <div className="contact__form col-6">
              <form id="my-form" action="mailto:romaniedelporte230@gmail.com" method="post" enctype="text/plain">
                <label for="fname">Firstname</label> 
                <input type="text" id="fname" name="firstname" placeholder="Firstname"></input> 
                <label for="fname">Lastname</label> 
               <input type="text" id="fname" name="lastname" placeholder="Lastname"></input> 
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.."></textarea>
                <button type="submit">Send</button>
              </form>
            </div>

         </div>
    </div>
  </div>
  );
};

export default ContactPage;