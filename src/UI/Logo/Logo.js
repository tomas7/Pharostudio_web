import React, { Component } from 'react'
import logo  from "../../Image/Logo/Logo_Colorized_black3_hor_solo_Bol.png";
import icon  from "../../Image/Logo/Icon_Centered.png";
import myClass from './Logo.module.css'

export class Logo extends Component {

    render() {

        let wrapperStyleObj = null
        let iconStyleObj = null
        let logoStyleObj = null

        if (this.props.smallScreenIcon) {
            console.log(this.props.smallScreenIcon)
            wrapperStyleObj = {
                width: "25px",
                height: "auto",
                position: "relative",
                top: "8px",
                padding: "8px",
                display: "block"}

            logoStyleObj = {
                display: "block",
              
            }  
            iconStyleObj = {
                width: "20px",
                top:"0px"
            }
        }else {
            console.log(this.props.smallScreenIcon)
            wrapperStyleObj = null
            logoStyleObj = null
            logoStyleObj = null
        }
        return (
            <div style={wrapperStyleObj}className={ this.props.logoWrapperClass}>
            <div>
            <img style={logoStyleObj} className={ this.props.logoClass} src={logo} alt=""/>
                <img style={iconStyleObj} className={ this.props.iconClass} src={icon} alt=""/>
            </div>
         
            </div>
        )
    }
}

export default Logo


