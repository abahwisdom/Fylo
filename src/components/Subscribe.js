import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Subscribe=()=>{

    const [emailValue, setEmail]= useState('')
    const [errorValue, setError]= useState('')

    function validateForm(e){
        e.preventDefault();
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailValue.match(mailformat)){
            setError('');
            return;
        }else{
            setError('Please Enter A Valid Email Address')
        }
                
    }

    return(
        <>
         <section className="subscription-container">
            <div className="subscribe">
            <h2>Get early access today</h2>
            <p>
                It only takes a minute to sign up and our free starter tier is extremely generous. If
                you have any questions, our support team would be happy to help you.
            </p>
            <form id="email-form">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="email@example.com" aria-label="E-mail address" id="email"/>
                <Button type="submit" onClick={e=>validateForm(e)} >Get Started For Free</Button>
            </form>
            <div className="err"><p>{errorValue}</p></div>
            </div>
        </section>
        </>
    )
}

export default Subscribe