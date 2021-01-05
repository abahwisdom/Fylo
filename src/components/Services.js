import React from 'react'


const servicesArray=[
    {
        icon:'./assets/images/icon-access-anywhere.svg',
        title:'Access your files, anywhere',
        details:'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
        icon:'./assets/images/icon-security.svg',
        title:'Security you can trust',
        details:'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files..'
    },
    {
        icon:'./assets/images/icon-collaboration.svg',
        title:'Real-time collaboration',
        details:'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
        icon:'./assets/images/icon-any-file.svg',
        title:'Store any type of file',
        details:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
]


const Services=()=>{
    return(
        <>
        <section className="services-contain">
            <div className="services">
        {
            servicesArray.map(({icon, title, details})=><Service icon={icon} title={title} details={details} />)
        }
            </div>
        </section>
        </>
    )
}

const Service=({icon, title, details})=>{
    return(
        
                <div className="service">
                    <img src={icon} alt={title}/> 
                    <h4>{title}</h4>
                    <p>{details}</p>
                </div>

    )
}

export default Services