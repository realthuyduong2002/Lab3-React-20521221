import React from 'react';
import './index.css';
import LinkedInIcon from './image/linkedin.png'
import CalendarIcon from './image/calendar.png'
import PhoneIcon from './image/phone.png'
import EmailIcon from './image/mail.png'
import AddressIcon from './image/address.png'

const Contact = () => (
    <div className="container">
        <div className="sider">
            <div className="sider-content">
                <h1 className="tag-fill">Contact</h1>
                <div className="tag-content">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/thuyduong0412">
                                <img src={LinkedInIcon} alt="LinkedIn Icon" className="linkedin-icon" />www.linkedin.com/in/thuyduong0412
                            </a>
                        </li>
                        <li><img src={CalendarIcon} alt="Calendar Icon" /> 04/12/2002</li>
                        <li><img src={PhoneIcon} alt="Phone Icon" /> +84 794065171</li>
                        <li><img src={EmailIcon} alt="Email Icon" /> 20521221@gm.uit.edu.vn</li>
                        <li><img src={AddressIcon} alt="Address Icon" /> Thich Quang Duc, Ward 5, Phu Nhuan District, HoChiMinh City.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;