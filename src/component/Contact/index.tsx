import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailReply } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title lg:ml-96 md:ml-10 sm:ml-10 py-8 text-2xl font-bold md:text-xl text-white pl-10">Get in touch</h2>
      <div className="contact-info flex flex-col gap-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHome} className="lg:ml-96 md:ml-10 sm:ml-10 pl-10 " />
          <p className='ml-2 text-white'>18/9 Tran Quy Cap, Hai Chau, Da Nang, Viet Nam.</p>
        </div>
        <div className="flex items-center mb-10">
          <FontAwesomeIcon  icon={faMailReply} className="lg:ml-96 md:ml-10 sm:ml-10 pl-10 " />
          <p className='ml-2 text-white'>contact@traninc.vn</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
