import React, {useState} from 'react'
import myClass from './PopUp.module.css'
import sendI from '../../Image/Icons/sendI.png'
import popUpImg from '../../Image/Photos/Popup.jpg'
import Axios from 'axios'

function PopUp(props) {
    let [email, setEmail] = useState(null)


    let changeState = (e) => {
     
        setEmail(email = e.target.value)
    }

    let subscribe = () => {
        if (email !== null && email.includes("@")) {
            let test = Axios.create({
                baseURL:'https://pharostudionewsletters.firebaseio.com/'
            });
            Axios.post('https://pharostudionewsletters.firebaseio.com/newsletters.json', {email})
            .then( Response => {
                console.log(Response)
            })
            .catch ( Err => {
                console.log(Err)
            })
        }else {
            alert("Please fill in correct email address")
        }
    }
    console.log(props)
    return (
        <>
            <img className={myClass.popUpImg} src={popUpImg} alt="Blank"/>
            <div className={myClass.popUpConteiner}>
                <h1>Offer for you</h1>
                <ul>
                    <li>A web site from start to finish without generic templates</li>
                    <li>A creative photoshoot with 3D printed props</li>
                </ul>
            <p>We offer services focused on startups and medium-sized companies. See more of our work and don`t hesitate to reach out.</p>
            <a onClick={() => props.history.push("/Portfolio")} href="#">See examples</a>
            </div>
            <div className={myClass.formConteiner}>
                <form action="POST">
                    <p>Sign up for our newsletters to stay in touch.</p>
                    <label for="Email"></label>
                    <input type="text" defaultValue="myEmail@gmail.com" onChange={(e) => changeState(e)}/>
                    <img onClick={() => subscribe()} className={myClass.send_icon} src={sendI} alt="Blank"/>
                </form>
            </div>
        </>
    )
}

export default PopUp
