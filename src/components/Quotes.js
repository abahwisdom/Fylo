import React from 'react'

const cardDetails=[

    {
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        image:'./assets/images/profile-1.jpg',
        name:'Satish Patel',
        title:'Founder & CEO, Huddle'
    },
    {
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        image:'./assets/images/profile-2.jpg',
        name:'Bruce McKenzie',
        title:'Founder & CEO, Huddle'
    },
    {
        quote:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        image:'./assets/images/profile-3.jpg',
        name:'Iva Boyd',
        title:'Founder & CEO, Huddle'
    },
]

const Quotes=()=>{
    return(
        <>
        <section className="quotes">
            {
                cardDetails.map(({quote, image, name, title})=><Card key={name} quote={quote} image={image} name={name} title={title}/> )
            }
        </section>
        </>
    )
}

const Card=({quote, image, name, title})=>{
    return(
        <div className='quote-card'>
                <p>
                    {quote}
                </p>
                <div className="card-profile">
                    <img src={image} alt={name}/>
                    <div className="card-details">
                    <div className="card-name">
                       {name}
                    </div>
                    <div className="card-title">
                        {title}
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Quotes