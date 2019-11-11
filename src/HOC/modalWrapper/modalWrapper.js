import React, { Component } from 'react'
import myClass from './modalWrapper.module.css'
import x from '../../Image/Icons/x.png'

export class modalWrapper extends Component {
    render() {
        return (
            <>
                <div className={myClass.fullWrapper} onClick={() => this.props.modalHandler()}></div>
      
                <div id="modalHOC" className={myClass.contentWrapper}>
                    {this.props.children}
                </div>
            
                <div className={myClass.contentWrapper1} onClick={() => this.props.modalHandler()}>
                    <img src={x} alt="blank"/>
                </div>
            </>
        )
    }
}

export default modalWrapper
