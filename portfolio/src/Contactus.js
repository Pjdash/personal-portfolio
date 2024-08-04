
import React, { useState } from 'react';
import './contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Contactus() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const getUserData = (event) => {
    const { id, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const sendMessage = () => {
    if (user.name && user.email && user.message) {
      axios.post('https://portfolio-1230d-default-rtdb.firebaseio.com/contacts.json', user)
        .then(() => {
          document.getElementById('success').style.display = 'block';
          document.getElementById('problem').style.display = 'none';
          setUser({ name: "", email: "", message: "" }); // Clear form
        })
        .catch((error) => {
          console.error("Error sending message: ", error);
          document.getElementById('success').style.display = 'none';
          document.getElementById('problem').style.display = 'block';
        });
    } else {
      document.getElementById('success').style.display = 'none';
      document.getElementById('problem').style.display = 'block';
    }
  };

  return (
    <div className='contact' method="POST">
      <h1 className='title'> Contact me<br/> At: </h1>
      <span>
        <p><FontAwesomeIcon icon={faEnvelope} /> jainpalak573@gmail.com</p>
        <p><FontAwesomeIcon icon={faTelegram} /> @Palak_jain_Pjdash</p>
      </span>

      <div className="contact-box">
        <h1>Let's get in touch!</h1>
        <div className="name">
          <FontAwesomeIcon icon={faUser}  className='icon' />
          <input
            type="text"
            placeholder="username"
            id="name"
            value={user.name}
            onChange={getUserData}
          />
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          <input
            type="email"
            placeholder="email"
            id="email"
            value={user.email}
            onChange={getUserData}
          />
        </div>
        <div className="message-box">
          <textarea
            placeholder="message"
            id="message"
            cols="30"
            rows="10"
            value={user.message}
            onChange={getUserData}
          />
        </div>
        <div className="button">
          <button onClick={sendMessage}>send</button>
        </div>
        <div className="message">
          <div className="success" id="success" style={{ display: 'none' }}>
            Message sent successfully!
          </div>
          <div className="problem" id="problem" style={{ display: 'none' }}>
            Fields can't be empty!
          </div>
        </div>
      </div>
    </div>
  );
}
