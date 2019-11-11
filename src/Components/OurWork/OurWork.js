import React, { Component } from 'react'
import myClass from './OurWork.module.css'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper';

import OurWorkItem from '../../Containers/OurWorkItem/OurWorkItem'
import * as actionTypes from '../../store/action'
import {connect} from 'react-redux'
import * as pathsSVG from '../../Sources/Paths/Paths'
import * as workText from '../../Sources/ourWork/WorkText/WorkText'
import {Element} from 'react-scroll';

import wV from '../../Image/Video/Web.mp4'
import aV from '../../Image/Video/Animation.mp4'
import vV from '../../Image/Video/SportsBuddy.mp4'
import gV from '../../Image/Video/Multimedia.mp4'

import ModalWrapper from '../../HOC/modalWrapper/modalWrapper'
import Modal from '../../Containers/Modal/Modal'
import * as ourWorkImages from '../../Sources/ourWork/WorkImages/caseImages'
import * as ourTextImages from '../../Sources/ourWork/WorkText/caseWorkText'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export class OurWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModal: false,
            modal: null
    }}
    targetElement = null;
  
    isBottom(el) {
        return el.getBoundingClientRect().bottom -500 <= window.innerHeight;
      }
         
      componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
        this.targetElement = null;
        clearAllBodyScrollLocks();
      }
      
      trackScrolling = () => {
        //   console.log("|tracking")
        const outWorkItemEl1 = document.getElementById('ourWorkItemW');
        const outWorkItemEl2 = document.getElementById('ourWorkItemG');
        const outWorkItemEl3 = document.getElementById('ourWorkItemV');
        const outWorkItemEl4 = document.getElementById('ourWorkItemA');
        console.log(this.props.overW);
        console.log(this.isBottom(outWorkItemEl1));
        if (this.isBottom(outWorkItemEl1) && !this.props.isOverW) {
          console.log("this.props.overW");
        this.props.TrueOverW(true);
        }else if(!this.isBottom(outWorkItemEl1) && this.props.isOverW) {
            console.log("this.props.aboveW");
            this.props.FalseOverW(false)
        }

            if (this.isBottom(outWorkItemEl2) && !this.props.isOverG) {
                console.log("this.props.overG")
        this.props.TrueOverG(true)
        }else if(!this.isBottom(outWorkItemEl2) && this.props.isOverG) {
            console.log("this.props.aboveG");
            this.props.FalseOverG(false)
        }
        if (this.isBottom(outWorkItemEl3) && !this.props.isOverV) {

        this.props.TrueOverV(true)
        }else if(!this.isBottom(outWorkItemEl3) && this.props.isOverV) {
            console.log("this.props.aboveV");
            this.props.FalseOverV(false)
        }
        if (this.isBottom(outWorkItemEl4) && !this.props.isOverA) {
 
        this.props.TrueOverA(true)
        }else if(!this.isBottom(outWorkItemEl4) && this.props.isOverA) {
            console.log("this.props.aboveA");
            this.props.FalseOverA(false)
        }
      };

    componentDidMount = () => {
        this.targetElement = document.querySelector('#modalHOC');
        console.log(ourTextImages)
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentDidUpdate() {
        console.log("I updated")
    }

    toggleModal = (e) => {

        if (!this.state.isModal) {
            
            this.setState({
                isModal: true,
                modal: e
            })
        }else {

            this.setState({
                isModal: false,
                modal: null
            })
        }
        
    
    }

    render() {
        let modal = null
        let curWorkImages = null
        let curWorkText = ourTextImages.caseWText

        switch (this.state.modal) {
            case "W":
            curWorkImages = ourWorkImages.case1Img
            curWorkText = ourTextImages.caseWText
                break;
            case "G":
            curWorkImages = ourWorkImages.case2Img
            curWorkText = ourTextImages.caseGText
                break;
            case "V":
            curWorkImages = ourWorkImages.case3Img
            curWorkText = ourTextImages.caseVText
                break;
            case "A":
            curWorkImages = ourWorkImages.case4Img
            curWorkText = ourTextImages.caseAText
                break;
        
            default:
                break;
        }
        if (this.state.isModal) {
            disableBodyScroll(this.targetElement);
            modal =  
            <>
                <ModalWrapper modalHandler={(e) => this.toggleModal(e)}>
                     <Modal caseImgObj={curWorkImages} caseTextObj={curWorkText}/>
                </ModalWrapper>
            </>
           
        }else {
            enableBodyScroll(this.targetElement);
            modal = null
        }
        return (
            <section className={myClass.sectionOurWork}>
           {modal}
            <Element name="ourWork">
                <h1 id="testId" className="sectionHeading inWrapper">Our work</h1>
                {/* <div> */}
                <OurWorkItem index={"W"}
                    title={workText.titleW} 
                    par={workText.parW}
                    path={pathsSVG.path1} 
                    pathObj={pathsSVG.pathObjW}
                    test={this.props.isOverW}
                    video={wV}
                    modalHandler={(e) => this.toggleModal(e)}
                    />
                <OurWorkItem index={"G"}
                    title={workText.titleG} 
                    par={workText.parG}
                    path={pathsSVG.path2} 
                    pathObj={pathsSVG.pathObjG}
                    test={this.props.isOverG}
                    video={gV}
                    modalHandler={(e) => this.toggleModal(e)}
                    />
                <OurWorkItem index={"V"}
                    title={workText.titleV} 
                    par={workText.parV}
                    path={pathsSVG.path3} 
                    pathObj={pathsSVG.pathObjV}
                    test={this.props.isOverV}
                    video={vV}
                    modalHandler={(e) => this.toggleModal(e)}
                    />
                      </Element>
                <OurWorkItem index={"A"}
                    title={workText.titleA} 
                    par={workText.parA}
                    path={pathsSVG.path4} 
                    pathObj={pathsSVG.pathObjA}
                    test={this.props.isOverA}
                    video={aV}
                    modalHandler={(e) => this.toggleModal(e)}
                    /> 
            {/* </div> */}
             
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        isOverW: state.isOverW,
        isOverG: state.isOverG,
        isOverV: state.isOverV,
        isOverA: state.isOverA
    }
}
const mapDispatchToProps = dispatch => {
    return {
         TrueOverW: (status) => dispatch({type: actionTypes.T_W,
        isOverW:status
        }),
         TrueOverG: (status) => dispatch({type: actionTypes.T_G,
        isOverG:status
        }),
         TrueOverV: (status) => dispatch({type: actionTypes.T_V,
        isOverV:status
        }),
         TrueOverA: (status) => dispatch({type: actionTypes.T_A,
        isOverA:status
        }),
         FalseOverW: (status) => dispatch({type: actionTypes.F_W,
        isOverW:status
        }),
         FalseOverG: (status) => dispatch({type: actionTypes.F_G,
        isOverG:status
        }),
         FalseOverV: (status) => dispatch({type: actionTypes.F_V,
        isOverV:status
        }),
         FalseOverA: (status) => dispatch({type: actionTypes.F_A,
        isOverA:status
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurWork)
