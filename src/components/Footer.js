import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer=()=>{
    return(
        <>
          <footer className="footer">
            <div className="wrapper">
            <div className="footer-logo">
                <div>
                    <img src="./assets/images/logo.svg" className='foot-logo' alt="Fylo"/>
                </div>
            </div>
            <address className="footer-contact">
                <div>
                <img className='mr-4 footer-icon' src='./assets/images/icon-location.svg'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                </div>
            </address>
            <address className="footer-contact mb-4 pb-4">
                <div className='mb-2'>
                <img className='mr-4 footer-icon' src='./assets/images/icon-phone.svg'/>
                <a href="tel:+">+1-543-123-4567</a>
                </div>
                <div className='mb-2'>
                <img className='mr-4 footer-icon' src='./assets/images/icon-email.svg'/>
                <a href="mailto:">example@fylo.com</a>
                </div>
            </address>
            <ul className="footer-menu pb-4">
                <li><a href="http://">
                    About Us
                </a></li>
                <li><a href="http://">
                    Jobs
                </a></li>
                <li><a href="http://">
                    Press
                </a></li>
                <li><a href="http://">
                    Blog
                </a></li>
            </ul>
            <ul className="footer-menu">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                    Contact Us
                </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                    Terms
                </a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">
                    Privacy
                </a></li>
            </ul>
            <ul className="footer-social">
                <li><FaFacebookF className="icon-social" /></li>
                <li><FaTwitter className="icon-social"/></li>
                <li><FaInstagram className="icon-social"/></li>
            </ul>
            
            </div>
            <p className="attribution mt-2" style={{maxWidth: '100%'}}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.<br/>
                Coded by <a href="https://github.com/abahwisdom" target="_blank">abahwisdom</a>.
            </p>
        </footer>
        </>
    )
}

export default Footer