import React, { Component } from 'react'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper';
import ServiceItem from '../../HOC/OneCol/OneCol'
import myClass from './Services.module.css'
import titleImg1 from '../../Image/Photos/card1.jpg'
import titleImg2 from '../../Image/Photos/card2.jpg'
import titleImg3 from '../../Image/Photos/card3.jpg'
import wI from '../../Image/Icons/webI.png'
import gI from '../../Image/Icons/graphicsI.png'
import sI from '../../Image/Icons/strategyI.png'
import {Element} from 'react-scroll'
import * as Scroll from 'react-scroll';

export class Services extends Component {

    scrollToWork = () => {
        console.log(Scroll)
        Scroll.scroller.scrollTo('ourWork', {
            duration: 1500,
            smooth: true,
            // containerId: 'ContainerElementID',
            offset: -150, // Scrolls to element + 50 pixels down the page

          })
    }   

    goPortfolio = () => {
     
            this.props.history.push('/Portfolio')
         
    }
   
    render() {
        return (
            <section>
                <ContentWrapper>
                    <Element name="services">
                        <h1 className="sectionHeading">Services</h1>
                        <div className={myClass.servicesContianer}>
                        
                            <ServiceItem 
                            titleImg={titleImg1} 
                            icon={gI} 
                            heading={"Graphic design"} 
                            item={["UX & UI Design", 'Wireframing', "Prototyping","Content creation","Brand & logo design"]}/>
                            <ServiceItem 
                            titleImg={titleImg3} 
                            icon={wI} 
                            heading={"Web design"} 
                            item={["Custom website", 'WordPress website', "Web application (interactive web)","Videography","Photography","Photography with a prop"]}/>
                            <ServiceItem 
                            titleImg={titleImg2} 
                            icon={sI} 
                            heading={"Business strategy"} 
                            item={["Pain points", 'Marketing', "Market research","Social media","Strategy","3D printing"]}/>
                        </div>
                        <div className={myClass.textStyle}>
                            <h1>Graphic design in Nordjyland</h1>
                            <p> Our studio is based in the Nordjylland region of Denmark, in city Aalborg. We focus on companies and entrepreneurs in the region as well as we work remotely with international clients.&nbsp;<br></br>
                            We approach every project and client in a <b>design-first</b>&nbsp;way. This means that we first analyze the problem by having a session with a client and only after determinate what the problem which we solve is.<br></br><br></br>
                            After this session(s) we will suggest our solutions and deliverables, it can be full&nbsp;<b>brand identity</b>,&nbsp;<b>logo design</b>&nbsp;or only small corrections of a specific&nbsp;<b>pain point</b>.</p>
                            
                            <h1>Web design</h1>
                            <p>Our main concept is to always build a <b>custom website</b> that solves the real problem of our client. Templates and generic websites are against our beliefs and they usually don't solve real problem.&nbsp; <br></br><br></br>
                            We tend to decide on a design, platforms, and technologies used together with a client. Our team loves to use our <b>photography</b>&nbsp;and <b>video</b> content. We will provide everything from photos of products or your team up to videos, <b></b>animations or <b></b>interviews.
                            </p>
                            
                            <h1>Business strategy</h1>
                            <p>The product will inherit to the main goal of a <b>business</b>, support a <b>message</b> and&nbsp;<b>brand identity</b>.&nbsp; <br></br><br></br>
                            Close collaboration with a client and the right framework help us to deliver the best solution. We work based on&nbsp;pain points&nbsp;and&nbsp;market research&nbsp;and if a client doesn't have these worked out yet, we will work on them before actual work starts.</p>
                        </div>
                       <div className={myClass.portfolioWrapper} onClick={() => this.goPortfolio()} >
                       <hr></hr>
                            <p>See overview of our work</p>
                            <h2 style={{textAlign: "center", color: "rgb(33, 51, 77)", cursor: "pointer"}}>See portfolio</h2><hr></hr>
                       </div>
                           
                    </Element>
                </ContentWrapper> 
            </section>
        )
    }
}

export default Services



 

 
