import React, { useState } from 'react';
import '../styles.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Access the form data
    const formData = {
      name,
      email,
      message
    };
  
    // TÄHÄN LÄHETYKSEN LOGIIKKA
    console.log(formData);
  
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='form-container'>
        <h2> Contact </h2> 
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        className="feedback-input"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        name="email"
        type="text"
        className="feedback-input"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        name="text"
        className="feedback-input"
        placeholder="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <input type="submit" value="SUBMIT" className="submit-button" />
    </form>

    </div>
  );
};

export default Contact;
