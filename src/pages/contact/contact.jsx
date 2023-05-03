import React, { useState } from 'react';

function Contact() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  return (
    <form name="contact" netlify>
      <label>
        Prénom :
        <input type="text" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </label>
      <label>
        Email :
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message :
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Contact;