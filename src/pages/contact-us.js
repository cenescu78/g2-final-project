import React from 'react';
import map from '../images/map.jpg';
import {ReactComponent as PinLocationLogo} from '../images/location-pin.svg';
import {ReactComponent as PhoneLogo} from '../images/phone.svg';
import {ReactComponent as EmailLogo} from '../images/ui-email.svg';
import './contact.scss';

export function ContactUs() {

    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Locatie sediu central</p>
                        <img className={'map'} src={map} alt="Map"/>;
                    </div>

                    <div className="info">
                        <div className="address">
                            {/*<PinLocationLogo style={{ width: "50%", height: "50%" }}/>*/}
                            <h4>Adresă:</h4>
                            <p>Str. Bucuresti nr. 129</p>
                            <p>Sector 1, 012857</p>
                            <p>Bucuresti, România</p>
                        </div>
                        <div className="email">
                            {/*<EmailLogo/>*/}
                            <h4>E-mail:</h4>
                            <p>info@htpp.ro</p>
                        </div>
                        <div className="phone">
                            {/*<PhoneLogo/>*/}
                            <h4>Telefon:</h4>
                            <p>+40 021 961 828</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
