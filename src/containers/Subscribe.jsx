import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic to handle the submit event when the user clicks the submit button on the contact form.
      
    // Reset input field after submission.
    setEmail('');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section className='subscribe-section'>
      <header>
        <h2>Stay Updated with the Latest Content</h2>
      </header>
      <div>
        <input
          type='email'
          name='email'
          placeholder='Subscribe With Your Email Address'
          autoComplete='off'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </section>
  );
}

export default Subscribe;
