import React from 'react';
import './footer.css';
import Icon from '../icon/icon';
import facebookIcon from '../../images/facebook.svg';
import linkedInIcon from '../../images/linkedin.svg';
import twitterIcon from '../../images/twitter.svg';

class footer extends React.Component {
    render() {
        return (
                <div className="links">
                    <Icon src={facebookIcon} alt={"Facebook"} />
                    <Icon src={linkedInIcon} alt={"LinkedIn"} />
                    <Icon src={twitterIcon} alt={"Twitter"} />
            </div>
        );
    }
}

export default footer;