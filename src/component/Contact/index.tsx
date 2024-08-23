import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailReply } from '@fortawesome/free-solid-svg-icons';
import { Row,Col } from 'antd';
const Contact = () => {
  return (
    <>
    <Row>
      <Col span={16} offset={5} >
      <div className="">
      <h2 className="contact-title  py-5 text-2xl font-bold md:text-xl text-white ">Get in touch</h2>
      <div className="contact-info flex flex-col gap-4 ">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHome} className=" " />
          <p className='ml-2 text-white'>18/9 Tran Quy Cap, Hai Chau, Da Nang, Viet Nam.</p>
        </div>
        <div className="flex items-center pb-12">
          <FontAwesomeIcon  icon={faMailReply} className=" " />
          <p className='ml-2  text-white'>contact@traninc.vn</p>
        </div>
      </div>
    </div>
      </Col>
    </Row>
    
    </>
  );
};

export default Contact;
