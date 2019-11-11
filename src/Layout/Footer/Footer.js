import React from 'react'
import myClass from './Footer.module.css'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper';
import iI from '../../Image/Icons/iI.png'
import iBe from '../../Image/Icons/iBe.png'
import {Element} from 'react-scroll';

function Footer() {
    return (
        <section className={myClass.footer}>
            <ContentWrapper>
            <Element name="footer" className="element">
            </Element>
                <div>
                    <div>
                        <h2>Location</h2>
                        <p>9400 Nørresundby</p>
                        <p>Denmark</p>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <p>Web development</p>
                        <p>Design</p>
                        <p>Business strategy</p>
                    </div>
                    <div>
                        <h2>Pharostudio</h2>
                        <p>CVR: 40194398</p>
                        <p>+45 91195424</p>
                        <p>contact@pharostudio.com</p>
                        <a target="Blank" href="https://www.instagram.com/pharostudio_/">
                            <img src={iI} alt="Behance Icon, pharostudio"/>
                        </a>

                        <a target="Blank" href="https://www.behance.net/pharostudio">
                            <img src={iBe} alt="Behance Icon, pharostudio"/>
                        </a>
                    </div>
                </div>
          
            </ContentWrapper>
        </section>
    )
}

export default Footer




