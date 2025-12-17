import { useState } from 'react';
import './Contact.css'
import msg_icon from "../../assets/images/msg-icon.png"
import mail_icon from "../../assets/images/mail-icon.png"
import phone_icon from "../../assets/images/phone-icon.png"
import location_icon from "../../assets/images/location-icon.png"
import white_arrow from "../../assets/images/white-arrow.png"

export default function Contact(){

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "64a6ab2f-634a-4d26-a5ed-1fcf8a3cf63b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon}/>contact@gmail.com</li>
                <li><img src={phone_icon}/>0123456789</li>
                <li><img src={location_icon}/>77 Massachusetts Ave, Cambridge <br/> MA 0213, United States</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type='text' name="name" placeholder='Enter your name' required /> 
              <label>Phone Number</label>
              <input type='number' name="phone" placeholder='Enter your phone number' required /> 
               <label>Write your messages here</label>
              <textarea name="message" rows="6" placeholder='Enter your messsage' required></textarea>
              <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

