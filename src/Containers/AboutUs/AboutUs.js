import React from 'react'
import myClass from './AboutUs.module.css'
import mainImg from '../../Image/Photos/AboutUsMain.jpg'
import profileImg from '../../Image/Photos/Tomas_profileWeb.png'

function AboutUs() {
    return (
        <>
            <img className={myClass.aboutMainImg} src={mainImg} alt="Blank"/>
            <div className={myClass.profileImgWrapper}>
                <img  src={profileImg} alt="Blank"/>
            </div>
            <p className={myClass.bodyText}>Pharostudio was founded by Tomas Haverla whose mission is to design a satisfying product together with a client and make a place for other creative individuals to grow and express themselves.
            <br></br><br></br>
            Throughout our working experience, we have gotten to work with various businesses and come cross the different obstacles companies face.</p>
            <div className={myClass.CTAWrapper}>
                <p className={myClass.CTA}>
                    <a  href="https://www.behance.net/tomh3" target="BLANK">GET IN TOUCH</a>
                </p>
            </div>
        </>
    )
}

export default AboutUs
