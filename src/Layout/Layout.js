import React from 'react'
import myClass from './Layout.module.css'
import {Route} from 'react-router-dom'
import WebsiteContent from '../Containers/WebsiteContainer/WebsiteContainer'
import Portfolio from '../Containers/Portfolio/Portfolio'
import { createBrowserHistory } from "history";
import { HashRouter } from 'react-router-dom';

function Layout(props) {
    const history = createBrowserHistory();
    console.log(props)
    return (
        <>
            <Route history={HashRouter} path="/" exact={true} component={WebsiteContent}/>
            <Route history={HashRouter} path="/Portfolio" exact={true} component={Portfolio}/>
            
        </>
    )
}

export default Layout
