import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper';



export default function ContactUs() {
    const [message, setMessage] = useState(null)
     
    function onChange(value) {
        ReCAPTCHA.reset() 
        console.log("Captcha value:", value);
      }
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_KixMDkmz', e.target, 'user_gNnhX9Xo0WlhrJZWj0ExQ')
      .then((result) => {
          console.log(result.text);
          setMessage("Sent! We will get back to you shortly.")
      }, (error) => {
          console.log(error.text);
          setMessage(error.text)
      });
  }

  return (
      <>
      <ContentWrapper>
      <h1 className="sectionHeadingCenter">Contact us</h1>
        <form className="contact-form" onSubmit={sendEmail}>
        
        {/* <input type="hidden" name="to_name" /> */}
        <div className="contact_col1">
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input  type="email" name="from_name" />
        
        </div>
        <div className="contact_col1">
            <label>Message</label>
            <textarea name="message_html" />
            <input className="contactForm_button" type="submit" value="Send" />
            <p className="msg">{message}</p>
            <div className="recaptcha">
                <ReCAPTCHA
                    sitekey="6Lc8NdcUAAAAAOw1llUkXfaknWpCQV4cJE8XEFpL"
                    size="invisible"
                    onChange={onChange}
                />
            </div>
         
        </div>
          
        </form>

      
        {/* <ReCAPTCHA
            sitekey="6Ld7DbYUAAAAAAupxFHVvflzx22hfMyQYSql6KsM"
            onChange={onChange}
        />, */}
      </ContentWrapper>

      </>

  );
}