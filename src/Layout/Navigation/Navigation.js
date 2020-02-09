import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../../UI/Logo/Logo'
import myClass from './Navigation.module.css'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper'
import hamI from '../../UI/ham_menu'
import icon  from "../../Image/Logo/Icon_Centered.png";
import AboutUs from '../../Containers/AboutUs/AboutUs'
import ModalWrapper from '../../HOC/modalWrapper/modalWrapper';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes'

import language from '../../Containers/Language/Language'

import * as L_en from '../../Sources/Languages/EN'
import * as L_dk from '../../Sources/Languages/DK'

import { useTranslation } from 'react-i18next';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logoClass_: "logoM",
            iconClass_: "logoI",
            logoWrapperClass_: "logoWrapperClass",
            active: false,
            ham: false,
            popUpContact: false
        }
    }


    
    targetElement = null;
    scrollPoint = 0.04;  

    componentDidMount() {
        this.targetElement = document.querySelector('#modalHOC');
        window.addEventListener('scroll', this.listenToScroll);
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
        window.removeEventListener("resize", this.resize);
        clearAllBodyScrollLocks();
        this.targetElement = null;
    }

    resize = () => {
        let currentHideNav = (window.innerWidth <= 800);
      
        if (currentHideNav !== this.state.ham) {
            this.setState({ham: currentHideNav});
            console.log("resizing")
        }
    }

    listenToScroll = () => {
        const scrollWin = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = scrollWin / height

        const currentState = this.state.active;

        if (scrolled > this.scrollPoint){
            
            if (this.state.logoClass_ !== "logoM_s") {
                this.setState({
                    logoClass_:"logoM_s",
                    iconClass_:"logoI_s",
                    logoWrapperClass_: "logoWrapperClass_s",
                    active: true
                })
            }
        }else {
            if (this.state.logoClass_ !== "logoM") {
                console.log("anim play")
                this.setState({
                    logoClass_: "logoM",
                    iconClass_: "logoI",
                    logoWrapperClass_: "logoWrapperClass",
                    active: false
                })
            }
        }
        
    }
    

    hamHandler = () => {
        this.setState({
            ham: !this.state.ham,
         
        })
    }

    handleSetActive= (to) => {
        console.log(to);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    toggleState = () => {
        this.setState({
            popUpContact: !this.state.popUpContact
        })
    }

    render() {

        let cur_language = L_en
        if (this.props.l_active === "L_EN") {
            cur_language = L_en
        }else if (this.props.l_active === "L_DK"){
            cur_language = L_dk
        }
        let aboutUs = null
        let logo = 
            <Logo  
                logoWrapperClass={this.state.logoWrapperClass_}
                logoClass={this.state.logoClass_} 
                iconClass={this.state.iconClass_}
            />   
        if (this.state.ham) {
            logo = 
            <Logo 
                smallScreenIcon = {this.state.ham}
                logoWrapperClass={this.state.logoWrapperClass_}
                logoClass={this.state.logoClass_} 
                iconClass={this.state.iconClass_}
            />   
        }else {
            logo = 
            <Logo  
                logoWrapperClass={this.state.logoWrapperClass_}
                logoClass={this.state.logoClass_} 
                iconClass={this.state.iconClass_}
            />
        }

        if (this.state.popUpContact) {
            disableBodyScroll(this.targetElement);
            aboutUs = 
                <ModalWrapper modalHandler={() => this.toggleState()}>
                    <AboutUs/>
                </ModalWrapper>
        }else {
            enableBodyScroll(this.targetElement);
            aboutUs = null
        }

        return (
            
            <>
            
                <nav className={this.state.active ? myClass.navWrapperActive: myClass.navWrapper} >
                <div onClick={() => this.hamHandler()} className={myClass.hamI}>
                    {hamI}
                </div>
                <ContentWrapper>
                    <ul className={myClass.topNav}>
    
                        <li className={this.state.ham ? myClass.hide : myClass.withBorder}> <Link activeClass="active" to="services" spy={true} smooth={true} offset={-130} duration={1500}>{cur_language.englishBundle.navigationText[0]}</Link></li>      
                        <li className={this.state.ham ? myClass.hide : myClass.withBorder}><NavLink to={{pathname:"/portfolio"}}>PORTFOLIO</NavLink></li>
                        <li className={this.state.ham ? myClass.hide : null}><Link activeClass="active" to="ourWork" spy={true} smooth={true} offset={-130} duration={1500}>OUR WORK</Link></li>
                        <li className={this.state.ham ? myClass.show : myClass.logoLi}>
                            <a onClick={this.scrollToTop}>
                                {logo}
                            </a>                      
                        </li>   
                        <li className={this.state.ham ? myClass.hide : myClass.withBorder}><Link activeClass="active" to="clients" spy={true} smooth={true} offset={-600} duration={1500}>{this.props.l_active === "L_EN"? "Clients" : "KUNDER"}</Link></li>                
                        <li className={this.state.ham ? myClass.hide : myClass.withBorder}><Link onClick={() => this.toggleState()} activeClass="active" to="#" spy={true} smooth={true} offset={50} duration={1500}>ABOUT US</Link></li>
                        <li className={this.state.ham ? myClass.hide : null}><Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={1500}>CONTACT</Link></li>        
                    </ul>
                </ContentWrapper>
            </nav>
         
            {aboutUs}
        
            <div style={{position:"absolute", zIndex:"99999"}}>
                <button  onClick={() => this.props.onLanguageChange("L_EN")}>EN</button>
                <button  onClick={() => this.props.onLanguageChange("L_DK")}>DK</button>
                 <button  onClick={() => console.log(cur_language.englishBundle)}>L</button>
            </div>
        
            </>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        l_active: state.l_active
    }
}

const mapDispatcheToProps = dispatch => {
    return {
        onLanguageChange: (language) => dispatch(actionTypes.l_change(language))
    }
}
export default  connect(mapStateToProps, mapDispatcheToProps)(Navigation);

