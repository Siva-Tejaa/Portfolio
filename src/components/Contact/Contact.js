import React, { useState } from 'react';
import './Contact.css';

import swal from 'sweetalert';

import { MdEmail } from 'react-icons/md';
import { BsArrowRightShort, BsWhatsapp } from 'react-icons/bs';

import { IoSend } from 'react-icons/io5';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const initialvalues = {
    firstname: '',
    email: '',
    message: '',
  };

  const [contactdata, setContactData] = useState(initialvalues);

  const { fullname, email, message } = contactdata;

  const changeHandler = (e) => {
    setContactData({ ...contactdata, [e.target.name]: e.target.value });
  };

  const submitContactForm = (e) => {
    e.preventDefault();

    if (
      contactdata.fullname === '' ||
      contactdata.email === '' ||
      contactdata.message === ''
    ) {
      swal({
        title:'Kindly Fill all the Data', 
        
      }
    );
    } else {
      setContactData(initialvalues);

      emailjs
        .sendForm(
          'service_lr6hzga',
          'template_ecg43ci',
          e.target,
          '0iM_FhvYp72UV329C'
        )
        .then(
          (result) => {
            // console.log(result.text);
            swal({
              title: 'Form Submitted',
              text: "We'll get back to you soon...",
              icon: 'success',
            });
          },
          (error) => {
            // console.log(error.text);
            swal('Something Went Wrong', `${error.text}`, 'error');
          }
        );

      e.target.reset();
    }
  };

  return (
    <div id="contact">
      <div className="contact-heading">
        <h1 className="contact-title">Get In Touch</h1>
        <span className="contact-subtitle">Let's connect</span>
      </div>
      <div className="contact-body">
        <div className="contact-body-left">

          <div className="contact-email">
            <MdEmail style={{ fontSize: '1.5rem' }} />
            <br />
            <span>Email</span>
            <p className="contact-content-text">asivateja1999@gmail.com</p>
            <a
              href="mailto:asivateja1999@gmail.com"
              className="contact-email-text"
            >
              Write me
              <BsArrowRightShort />
            </a>
          </div>

          <div className="contact-email">
            <BsWhatsapp style={{ fontSize: '1.5rem' }} />
            <br />
            <span>Whatsapp</span>
            <p className="contact-content-text">+91-7981203040</p>
            <a
              href="https://api.whatsapp.com/send?phone=7981203040&text=Hello!"
              className="contact-whatsapp-text"
            >
              Write me
              <BsArrowRightShort />
            </a>
          </div>
        </div>
        <div className="contact-body-right">
          <div className="contact-form">
            <span className="contact-head-text">Send a message 🚀</span>
            <br />
            <form onSubmit={submitContactForm}>
              <div className="form-group">
                <input
                  placeholder="Full Name"
                  type="text"
                  autoComplete="off"
                  name="fullname"
                  pattern={`[A-Za-z ]{3,16}$`}
                  value={fullname}
                  onChange={changeHandler}
                  className="fullname"
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  className="email"
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Message"
                  autoComplete="off"
                  name="message"
                  value={message}
                  onChange={changeHandler}
                  rows={4}
                  cols={40}
                  className="message"
                />
              </div>

              <div className="form-group">
                <button className="btn-msg">
                  Send Message &nbsp;
                  <IoSend className="send-icon"/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
