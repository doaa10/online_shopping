import React from 'react';
import "./home.css";


const linksLeft=[
'Women',
'Divided',
'Men',
'Baby',
'Kids',
'Home',
'Sport',
'Sale',
'Sustainability',
]
const linksCenter=[
'Delivery Information',
'Terms And Conditions Of Sale',
' Website Terms & Conditions',
' Privacy Policy',
' Returns & Refunds',    
]
const linksRight=[
    'FAQs',
    'Contact Us',
    'Stores',

]

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLeft'>
            <ul>
            <span>Shop</span>

                {linksLeft.map((link)=>{
                    return <li><a>{link}</a></li>
                })}

            </ul>

            
        </div>
        <div className='footerCenter'>
            <ul>
            <span>CORPORATE INFO</span>
                {linksCenter.map((link)=>{
                    return <li><a>{link}</a></li>
                })}

            </ul>

        </div>
        <div className='footerRight'>
            <ul>
            <span>CUSTOMER SERVICE</span>
                {linksRight.map((link)=>{
                    return <li><a>{link}</a></li>
                })}

            </ul>
            <div className='news'>
                <span>NEWSLETTER </span>
                <p>Be The First To Know About 
                    Our Newest Arrivals, Special Offers And Store Events Near You.</p>
                    <div className='subscripe'>
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Subscripe</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
