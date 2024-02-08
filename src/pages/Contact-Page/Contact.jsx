import React, { useState } from 'react';
import Layout from '../../Layout';
import '../Contact-Page/Contact.scss';

const Contact = () => {
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', mobile: '', message: '' });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the submit event when the user clicks the submit button on the contact form.

    // Reset form fields after submission.
    setData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
  };

  return (
    <Layout>
      <div className='contact-us-page'>
        <article className="laugh-with-modi-content">
          <section>
            <header>
              <h1>Welcome To LaughWithModi.In</h1>
            </header>
            <p>
              Your one-stop destination for hilarious and witty content.
              We're thrilled that you want to get in touch with us. 
              Whether you have a funny story to share, want to collaborate, or have any queries, we'd love to hear from you.
            </p>
          </section>

          <section>
            <header>
              <h2>Share Your Jokes and Memes</h2>
            </header>
            <p>
              Have a rib-tickling joke or a side-splitting meme that you believe will bring a smile to everyone's face ? 
              Share it with us at LaughWithModi.in, we are all about spreading laughter and joy. 
              Send us your funniest content, and if it gets our team rolling on the floor laughing, 
              we might feature it on our website for our global audience to enjoy.
            </p>
          </section>

          <section>
            <header>
              <h2>Collaborate and Create Laughter Together</h2>
            </header>
            <p>
              Are you a creative individual with a knack for comedy ?
              Whether you're a stand-up comedian, a sketch artist, or a writer with a flair for humor, 
              we'd love to collaborate with you. Join forces with our team of jesters, 
              and together, we can create a never-ending stream of laughter that reaches every corner of the internet.
            </p>
          </section>

          <section>
            <header>
              <h2>Technical Support and Queries</h2>
            </header>
            <p>
              Do you need technical assistance with the website or have questions about our content ? 
              Our support team is here to help, If you encounter any issues while navigating through the site 
              or if you have queries about the content we publish, don't hesitate to reach out. 
              We are committed to delivering a seamless experience for all our visitors.
            </p>
          </section>

          <section>
            <header>
              <h2>Spread the Laughter, Spread the Love</h2>
            </header>
            <p>
              Laughter is a universal language, and at LaughWithModi, we believe in sharing the joy with people from all walks of life. 
              Join our community of laughter lovers and let's create a positive impact together. 
              Follow us on social media, subscribe to our newsletter, and be part of the laughter revolution.
            </p>
          </section>

          <section>
            <header>
              <h2>Get in Touch</h2>
            </header>
            <p>
              Get in touch with us using the contact form or drop us an email at contact@laughwithmodi.in. 
            </p>
          </section>

          <section>
            <p>
              So, are you ready to laugh your heart out ? 
              Let's make the world a happier place, one joke at a time. 
              Keep smiling, keep laughing, and remember, with Modi, every moment is a moment to cherish.
            </p>
          </section>
        </article>

        <form onSubmit={handleSubmit}>
          <div className='column'>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
              autoComplete='off'
              value={data.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='column'>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
              autoComplete='off'
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='column'>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='email@domain.com'
              autoComplete='off'
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='column'>
            <label htmlFor="mobile">Mobile *</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder='+91-xxxxx-xxxxx'
              autoComplete='off'
              value={data.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className='column'>
            <label htmlFor="message">Message *</label>
            <textarea
              type='text'
              id="message"
              name="message"
              placeholder='If You Have Any Query, Please Write A Message.'
              autoComplete='off'
              value={data.message}
              onChange={handleChange}
              require
            />
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
