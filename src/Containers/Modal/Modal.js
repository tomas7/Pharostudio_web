import React from 'react'
import myClass from './Modal.module.css'


function Modal(props) {
    console.log(props)
    return (
     
        <>
                <img className={myClass.caseImg} src={props.caseImgObj.case1Img1} alt={props.caseTextObj.mainImgAlt}/>
                <h1 className={myClass.caseHeading}>{props.caseTextObj.mainH}</h1>
                <p className={myClass.pilotText}>{props.caseTextObj.mainP}</p>
                <img className={myClass.bodyImg} src={props.caseImgObj.case1Img2} alt={props.caseTextObj.bodyImgAlt}/>
                <p className={myClass.bodyText}>{props.caseTextObj.bodyP}</p>
                <div className={myClass.tripleImg}>
                    <img src={props.caseImgObj.case1Img1_3} alt={props.caseTextObj.triple1ImgAlt}/>
                    <img src={props.caseImgObj.case1Img2_3} alt={props.caseTextObj.triple2ImgAlt}/>
                    <img src={props.caseImgObj.case1Img3_3} alt={props.caseTextObj.triple3ImgAlt}/>
                </div>
                <p className={myClass.endText}>{props.caseTextObj.endP}</p>
                <div className={myClass.CTAWrapper}>
                    <p className={myClass.CTA}>
                        <a target="Blank" href="https://www.behance.net/pharostudio">LIKE THE PROJECT</a>
                    </p>
                </div>
          
        </>
    )
}

export default Modal
