import React from 'react'
import ContentWrapper from '../../HOC/contentWrapper/ContentWrapper'
import myClass from './Landing.module.css'

function Landing() {
    return (
        <section className={myClass.landingWrapper}>
            <ContentWrapper>
                <div>
                    <h1>
                        Web, Design & business strategy studio
                    </h1>
                    <p>
                        <br></br>
                        Our core value is the design-first approach to the clients' problems. While working on a project, client will become part of our team as we thrive to not only work for a client but together with a client.
                        <br></br>
                        <br></br>
                        We specialize in helping small and medium sized businesses and entrepreneurs.
                    </p>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Landing
