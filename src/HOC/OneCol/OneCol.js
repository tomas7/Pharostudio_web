import React from 'react'
import myClass from './OneCol.module.css'

function OneCol(props) {

    function isOdd(num) { return num % 2;}

    let transformedIngredients = props.item.map( (element,igKey) => {
        console.log(igKey)
        if(props.item.length -1 === igKey && isOdd(igKey)){
            console.log("last " + igKey)
            return  <li style={{borderTop: "3px solid rgba(242,218,196,.7)"}} key={igKey}>{props.item[igKey]}</li>
        }
        else if (isOdd(igKey)) {
            return  <li style={{borderTop: "3px solid rgba(242,218,196,.7)", borderBottom: "3px solid rgba(242,218,196,.7)"}} key={igKey}>{props.item[igKey]}</li>
        }
        else {
            return  <li key={igKey}>{props.item[igKey]}</li>
        }

    } )

    let titleImg = null
    if (props.titleImg) {
        titleImg = <><div className={myClass.titleImg}>
        <img src={props.titleImg} alt="blank"/>
    </div></>
    }else {
        titleImg = null
    }

    console.log(props)
    return (
     
        <>

        <div className={myClass.cardWrapper}>
            {titleImg}
            <div className={myClass.icon}>
                <img src={props.icon} alt="blank"/>
            </div>
            <div className={myClass.card}>
                <h2>{props.heading}</h2>
                {transformedIngredients}
            </div>
        </div>
 </>
    )
}

export default OneCol
