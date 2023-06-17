import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css'

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = form.current.user_email.value;

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      setSuccessMessage('');
      return;
    } else {
      setErrorMessage('')
    }


    emailjs.sendForm( // API Keyt julkisia koska: https://reginafurness.medium.com/emailjs-with-create-react-app-1f9c7f615c17
      'service_5avilb9',
      'template_6frrlo9',
      form.current,
      '_uRhCWba1tclhqBye')
      .then((result) => {
        console.log(result.text);
        event.target.reset();
        setErrorMessage('');
        setSuccessMessage('Email was sent successfully. Thank you!');
      }, (error) => {
        console.log(error.text);
        setErrorMessage('An error occurred while sending the email. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div className='form-container'>
      <h2> Contact me by email </h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          name="user_name"
          type="text"
          className="feedback-input"
          placeholder="Name"
          required={true}
        />
        <input
          name="user_email"
          type="text"
          className="feedback-input"
          placeholder="Email"
          required={true}
        />
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Message"
          required={true}
        ></textarea>
                {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="success-message">
            {successMessage}
          </p>
        )}
        <input type="submit" value="SUBMIT" className="submit-button" />
      </form>
    </div>
  );
};

export default Contact;