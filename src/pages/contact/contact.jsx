import React, { useState } from 'react';
import { MdLocationOn, MdEmail, MdPhoneIphone } from 'react-icons/md';

import './contact.scss';

function Contact() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  return (
    <main className='contact'>
      <h1 className='contact_title'> Vous pouvez me contactez ici !</h1>
      <div className='contact_preview'>
         <div className='contact_location'>
          <div className='contact_location_loc-icon'>
            <MdLocationOn />
          </div>
            <p> Paris et Banlieue Est</p>
         </div>
         <div className='contact_mail'>
          <div className='contact_mail_email-icon'>
            <MdEmail />
          </div>
            <p> minhaj.shafiq@icould.com</p>
         </div>
         <div className='contact_mobile'>
          <div className='contact_mobile_mobile-icon'>
            <MdPhoneIphone />
          </div>
            <p> 07 71 64 18 39</p>
         </div>
      </div>
      <form className='contact_form' name="contact" netlify>
        <label>
          <input placeholder='Prénom' type="text" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </label>
        <label>
          <input placeholder='Email' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <textarea placeholder='Votre message' name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button className='button' type="submit">Envoyer</button>
      </form>
    </main>
  );
}

export default Contact;