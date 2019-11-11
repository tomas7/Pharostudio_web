import React from 'react'
import myClass from './ContentWrapper.module.css'

function ContentWrapper(props) {
    return (
        <div className={myClass.contentWrapper}>
            {props.children}
        </div>
    )
}

export default ContentWrapper
