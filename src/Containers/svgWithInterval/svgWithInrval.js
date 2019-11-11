import React, { Component } from 'react'
import myClass from './svgWithInterval.module.css'

export class svgWithInrval extends Component {
    constructor(props){
        super(props)
        this.state = {
            el : false
        }
    }

    componentDidMount() {
      
        document.addEventListener('scroll', this.trackScrolling);
    }

  playAnim = () =>{
    let myPath1 = "myPath" + this.props.index
    const myPath = document.getElementById(myPath1)
    const pathObj_ = this.props.pathObj
    let testObj = Object.keys(pathObj_).map((el, indx) => {
           return pathObj_[el]
    })
    
    let arr = []

    testObj.forEach(element => {
        arr.push(()=>{myPath.setAttribute("d", element)}, )
    });



    arr.map(function (fun, index) {  
        setTimeout(fun, 800 + index * 200);
        })
    }
     
     componentDidUpdate() {
         console.log("I have updated _SVG")
        if (this.props.test && !this.state.el) {
            console.log("playing anim > was not played")
            this.setState({
                el:true
            })
            this.playAnim()
            
        }else if (!this.props.test && this.state.el){
            console.log("NOT playing anim > already played")
            this.setState({
                el:false
            })
        }    
       }
     
    render() {

        return (
            <>
                <svg className={myClass.svg_} xmlns="http://www.w3.org/2000/svg" y="0px" x="0px" viewBox="0 0 900 900" width="113%" height="113%"><title>Mask_W</title>                   
                    <defs>
                    <mask maskUnits="userSpaceOnUse" id={"mask" + this.props.index} viewBox="0 0 800 800" width="100%" height="100%" >
                    <rect width="150%" height="150%"/>
                    <g id="letter2">
                    <path fill='red' id={"myPath" + this.props.index} d={this.props.path} />
                    </g>
                    </mask>
                </defs> 
                <rect  style={{mask:"url(#mask" + this.props.index + ")", fill:"#21334D"}} width="100%" height="100%"/>
                </svg>
            </>
           
        )
    }
}

export default svgWithInrval

// transform="translate(-12.22 -112.13)"