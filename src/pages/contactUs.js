import React from 'react';
import './contactUs.css';

class ContactUs extends React.Component {
    render() {
        return (
          <div className="contactUsWrapper">
            <div className="form-Intro">
              <h3>Get in touch</h3>
              <h4>Dop us a line, send us an email or contact us via the social media links at the bottom of this page.</h4>
            </div>

            <form className="form-Wrapper" id="telephone" method="post">
              <fieldset className="form-About_Wrapper">
                <legend><span>Call us Mon-Fri: 08:30 - 17:00</span></legend>
                <div className="form-Input_Wrapper">
                  <label for="film">Landline: 01492 330210</label>
                  <label for="film">Mobile: 07920 000000</label>
                </div>
              </fieldset>
            </form>
            
            <form className="form-Wrapper" id="email" method="post">
              <fieldset className="form-About_Wrapper">
                <legend><span>Sent us an email</span></legend>
                <div className="form-Input_Wrapper">
                  <input id="name" name="name" pattern="^([\D]{2,30}\s+)+([a-zA-Z]{2,30})$" placeholder="Smeat" required />
                  <label for="name">Your Name</label>
                </div>
                <div className="form-Input_Wrapper">
                  <input id="name" name="name" pattern="^([\D]{2,30}\s+)+([a-zA-Z]{2,30})$" placeholder="07920 000000" required />
                  <label for="name">Contact Number</label>
                </div>
                <div className="form-Input_Wrapper">
                  <textarea id="tel" name="tel" type="tel" placeholder="What's your message" autocomplete="off"  required />
                  <label for="tel">Message</label>
                </div>
              </fieldset>
              
              <button className="form-Submit_Btn" type="submit" value="Submit Redemption">
                <span className="flipper">
                  <span className="flipper-object flipper-vertical">
                    <span className="panel front">Ready?</span>
                    <span className="panel back">Send</span>
                  </span>
                </span>
              </button>
            </form>  
                       

            <form className="form-Wrapper" id="address" method="post">
              <fieldset className="form-About_Wrapper">
                <legend><span>Find us</span></legend>
                <div className="form-Input_Wrapper address">
                  <div><label>Absolute Precision Auto Detailing</label></div>
                  <div><label>Unit 2, Falcon estate, Swan road,</label></div>
                  <div><label>Mochdre Business park, Mochdre</label></div>
                  <div><label>Conwy, North Wales, LL28 5HB</label></div>
                </div>
              </fieldset>
            </form>         

          </div>
        );
    }
}

export default ContactUs;