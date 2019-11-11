import React, { Component } from 'react'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper'
import ClientItem from '../../HOC/OneCol/OneCol';
import myClass from './Clients.module.css';
import pharmaI from '../../Image/Icons/c1.png';
import sportsI from '../../Image/Icons/c2.png';
import tommerupI from '../../Image/Icons/c3.png';
import velaI from '../../Image/Icons/c4.png';
import visblueI from '../../Image/Icons/c5.png';
import Pulse from 'react-reveal/Pulse';
import {Element} from 'react-scroll';
import * as Scroll from 'react-scroll';

export class Clients extends Component {
    constructor(props){
        super(props)
        this.state = {
            hClient1: this.hCSportsbuddy,
            pClient1: this.pCSportsbuddy,
            iClient1: sportsI,
        
            hClient2: this.hCSTommerup,
            pClient2: this.pCSportsbuddy,
            iClient2: tommerupI,
        
            hClient3: this.hCVela,
            pClient3: this.pCVela,
            iClient3: velaI,

            stage: 1
        }
    }

        

    hCSportsbuddy = "Sportsbuddy"
    pCSportsbuddy = ["Branding","Photography", "Testing", "Videography", "Web design"]

    hCSTommerup = "Tommerup Heilskov"
    pCTommerup = ["Web design","Wireframing", "Branding", "Testing", "WordPress developemnt"]

    hCVela = "VELA"
    pCVela = ["Photography", "Videography", "Marketing content", "Animation"]

    hCVisblue = "Visblue"
    pCVisblue = ["Web application", "Website", "Testing"]

    hC2APharma = "2A Pharma"
    pC2APharma = ["Animation", "Videography", "Storytelling", "Photography", "3D printing", "Photography with a prop"]

    componentDidMount() {
        console.log(this.state.hClient1)
        console.log(this.hCSportsbuddy)
        setInterval(() => {
          
            if (this.state.stage === 1) {
                let oldhC1 = this.state.hClient1
                let oldpC1 = this.state.pClient1
                let oldiC1 = this.state.iClient1

                let oldhC2 = this.state.hClient2
                let oldpC2 = this.state.pClient2
                let oldiC2 = this.state.iClient2

                let oldStage = this.state.stage
                let newStage = oldStage + 1

                oldhC1 = this.hCVisblue
                oldpC1 = this.pCVisblue
                oldiC1 = visblueI

                oldhC2 = this.hC2APharma
                oldpC2 = this.pC2APharma
                oldiC2 = pharmaI

                console.log(oldpC1)

                console.log(oldpC2)

                console.log("changed")
                this.setState({
                    hClient1: oldhC1,
                    pClient1: oldpC1,
                    iClient1: oldiC1,
                    hClient2: oldhC2,
                    pClient2: oldpC2,
                    iClient2: oldiC2,

                    stage: newStage
                })
            }else if (this.state.stage === 2){
                console.log("changed1")
                    let oldhC1 = this.state.hClient1
                    let oldpC1 = this.state.pClient1
                    let oldiC1 = this.state.iClient1
    
                    let oldhC2 = this.state.hClient2
                    let oldpC2 = this.state.pClient2
                    let oldiC2 = this.state.iClient2

                    let oldStage = this.state.stage
                    let newStage = oldStage - 1 
    
                    oldhC1 = this.hCSportsbuddy
                    oldpC1 = this.pCSportsbuddy
                    oldiC1 = sportsI
    
                    oldhC2 = this.hCSTommerup
                    oldpC2 = this.pCTommerup
                    oldiC2 = tommerupI
    
                    this.setState({
                        hClient1: oldhC1,
                        pClient1: oldpC1,
                        iClient1: oldiC1,
                        hClient2: oldhC2,
                        pClient2: oldpC2,
                        iClient2: oldiC2,
    
                        stage: newStage
                    })
               
            }
        }, 5000);
    
    }

    scrollToWork = () => {
        console.log(Scroll)
        Scroll.scroller.scrollTo('ourWork', {
            duration: 1500,
            smooth: true,
            // containerId: 'ContainerElementID',
            offset: -150, // Scrolls to element + 50 pixels down the page

          })
    }   



    render() {
        return (
            
            <section>
                  <Element name="clients" className="element">
                <ContentWrapper>
                  
                        <h1 className="sectionHeading">Our clients</h1>
                    
                    
                    <div className={myClass.servicesContianer} onClick={() => this.scrollToWork()}>   
                        <div className={myClass.serviceItemWrapper}>
                        <Pulse 
                        spy={this.state.stage}
                        appear={true}
                        >
                            <ClientItem                        
                            icon={this.state.iClient1} 
                            heading={this.state.hClient1} 
                            item={this.state.pClient1}/>
                        </Pulse>                
                       </div>

                       <div className={myClass.serviceItemWrapper}>
                        <Pulse 
                        spy={this.state.stage}
                        appear={true}
                        >
                            <ClientItem                        
                            icon={this.state.iClient2} 
                            heading={this.state.hClient2} 
                            item={this.state.pClient2}/>
                        </Pulse>   
                        </div>

                        <div className={myClass.serviceItemWrapper}>
                        <Pulse>
                            <ClientItem                        
                            icon={this.state.iClient3} 
                            heading={this.state.hClient3} 
                            item={this.state.pClient3}/>
                        </Pulse>
                        </div>

                    </div>
                 
                </ContentWrapper> 
                </Element>
            </section>
        )
    }
}

export default Clients
