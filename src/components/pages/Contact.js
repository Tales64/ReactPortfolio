import React from 'react';

export default function Contact () {
    return (
        <div className='contact' class = '{color}--bs-info {color}-bs-warning'>
        <p>I am open to any job opportunities and can be reached through any of these methods.</p>
        <ul className='contact-ul'>
            <li className='contact-li'>
                LinkedIn: <a href='https://www.linkedin.com/in/darryl-tillman-07a28a94/' target="_blank" rel="noreferrer">Darryl Tillman</a>
            </li>
            <li className='contact-li'>
                Github: <a href='https://www.github.com/Tales64/' target="_blank" rel="noreferrer">Tales64</a>
            </li>
            <li className='contact-li'>
                Email: <a href='mailto: tales64@gmail.com' target="_blank" rel="noreferrer">tales64@gmail.com</a>
            </li>
            <li className='contact-li'>
                If you would like to reach me by phone, please email me and request a call. 
            </li>
        </ul>
    </div>);
};