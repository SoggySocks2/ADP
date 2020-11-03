import React from 'react';
import './footer.css';
import IconExternal from '../icon/iconExternal';
import facebookIcon from '../../images/facebook.svg';
import linkedInIcon from '../../images/linkedin.svg';
import twitterIcon from '../../images/twitter.svg';
import instagramIcon from '../../images/instagram.svg';

class footer extends React.Component {
    render() {
        return (
            <div className="footerLinks">
            <IconExternal src={instagramIcon} alt={"instagram"} width="40" height="40" href="https://www.instagram.com/apadetailing/" />
                <IconExternal src={facebookIcon} alt={"Facebook"} width="40" height="40" href="https://www.facebook.com/smeat.jones.3/" />
                <IconExternal src={linkedInIcon} alt={"LinkedIn"} width="40" height="40" href="https://www.linkedin.com/in/smeat/"/>
                <IconExternal src={twitterIcon} alt={"Twitter"} width="40" height="40" href="https://twitter.com/JonesSmeat" />
            </div>
        );
    }
}

export default footer;