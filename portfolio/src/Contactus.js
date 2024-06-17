import React from 'react';
import './contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contactus() {
  return (
    <div className='contact'>
        <h1 className='title'> Contact me</h1>
        <span>
            <p>997078484</p>
            <p>@pjdash</p>
        </span>
   
          <div className="contact-box">

<h1>Let's get in touch!</h1>
<div className="name" >
    <i className="fas fa-user"></i>
    <input type="text" placeholder="username" id="name"/>
</div>
<div className="email">
    <i className="fas fa-envelope"></i>
    <input type="email" placeholder="email" id="email"/>
</div>
<div className="message-box">
    <textarea placeholder="message" id="message-box" cols="30" rows="10"></textarea>   
</div>
<div className="button">
    <button onclick="message()">send</button>
</div>
<div className="message" >
    <div className="success" id="success">
        Message send successfully!
    </div>
    <div className="problem" id="problem">
        Fields can't be empt!
    </div>
</div>      
</div>
</div>
  )
}
