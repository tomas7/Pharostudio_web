import React, { Component } from 'react'
import myClass from './OurWorkItem.module.css'
import videoWeb from '../../Image/Video/Web.mp4'
import SvgW_Interval from '../../Containers/svgWithInterval/svgWithInrval'
import {connect} from 'react-redux'

export class OurWorkItem extends Component {
        constructor(props){
            super(props)
            this.state = {
                test:null
            }
        }
            
    componentDidMount() {
        console.log(this.props)
    }
   
  



    componentDidUpdate() {
        
        console.log(this.props)
    }

    shouldComponentUpdate(nextProps) {
        const difference = this.props.test !== nextProps.test
        if (difference) {
            return true
        }else {
            return false
        }
    }
    


    render() {
        // let svg = null
        // if (this.props.test) {
        
            
        // }else {
        //     svg = null
        // }
        
        return (
            <div id={"ourWorkItem" + this.props.index} className={myClass.itemWrapper}>
            <div className={myClass.item}>

            <div className={myClass.item1}>
            <video className={this.props.test ? myClass.inAnim : myClass.outAnim} src={this.props.video} autoplay="autoplay" muted="muted" preload="auto"></video>
                <SvgW_Interval path={this.props.path} index={this.props.index} test={this.props.test}
                pathObj = {this.props.pathObj}/>
            </div>
   
            </div>
            <div className={myClass.textWrapper}>
                <h1>{this.props.title}</h1>
                <p>
                   {this.props.par}
                </p>
                <a onClick={() => this.props.modalHandler(this.props.index)} >SEE MORE</a>                    
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       
        overW: state.isOverW,
        overG: state.isOverG,
        overV: state.isOverV,
        overA: state.isOverA
    }
}

export default connect(mapStateToProps)(OurWorkItem);
