import React, {useEffect, useState} from 'react'
import Landing from '../Landing/Landing'
import Nav from '../../Layout/Navigation/Navigation'
import Services from '../../Components/Services/Services'
import OurWork from '../../Components/OurWork/OurWork';
import Clients from '../../Components/Clients/Clients';
import Footer from '../../Layout/Footer/Footer';
import ModalWrapper from '../../HOC/modalWrapper/modalWrapper'
import PopUp from '../../Containers/PopUp/PopUp'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function WebsiteContainer(props) {
    let [isPopUp, setIsPopUp] = useState()

    let targetElement = null;


    useEffect(() => {
        targetElement = document.querySelector('#modalHOC');
        console.log("I have mounted: WebsiteContainer")
        console.log(isPopUp)
        window.setTimeout(function(){
            // First check, if localStorage is supported.
            if (window.localStorage) {
                // Get the expiration date of the previous popup.
                var nextPopup = localStorage.getItem( 'nextNewsletter' );
                if (nextPopup > new Date()) {
                    return;
                }
                if (isPopUp) {
                    setIsPopUp(isPopUp = false)
                    console.log("popup was already showed")
                }
                // Store the expiration date of the current popup in localStorage.
                var expires = new Date();
                expires = expires.setHours(expires.getHours() + 24);
                localStorage.setItem( 'nextNewsletter', expires );
            }
            if (!isPopUp) {
                setIsPopUp(isPopUp = true)
            console.log("popup showed")
            }
        }, 3000);
        return () => {
            clearAllBodyScrollLocks();
            console.log('will unmount');
          }
          //had isPopUp inside arr
    },[]);

    // const updatePopUp = e => {
    //     setIsPopUp(isPopUp = e)
    // }

    let toggleState = () => {
        setIsPopUp(!isPopUp)
    }

    let popUp = null
    if (isPopUp) {
        disableBodyScroll(targetElement);
        popUp = 
        <>
            <ModalWrapper modalHandler={() => toggleState()}>
                <PopUp history={props.history}/>
            </ModalWrapper>
        </>
    }else {
        enableBodyScroll(targetElement);
        popUp = null
    }

    return (
        <>
            {popUp}
            <Nav/>
            <Landing/>
            <Services history={props.history}/>
            <OurWork/>
            <Clients/>
            <Footer/>
        </>
    )
}

export default WebsiteContainer
