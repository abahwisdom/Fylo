import React from 'react'
import {HiArrowCircleRight} from 'react-icons/hi'

const HowFyloWorks=()=>{
    return(
        <>
            <section className="fylo-works-contain">
                
                <img className="stay-productive-img" src="./assets/images/illustration-stay-productive.png"
                    alt="stay productive" width="615px" height="465px"/>
                
                <div className="content">
                <h2>
                    Stay productive, wherever you are
                </h2>
                <p>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>
                <a href="#" className="work-link">
                    <HiArrowCircleRight className='arrow-work'/>
                    See how Fylo works
                    <div className='after-work'></div>
                </a>

                </div>
        </section>
        </>
    )
}

export default HowFyloWorks