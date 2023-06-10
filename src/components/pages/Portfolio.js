import React from 'react';

import gameHoard from '../assets/gamehoard.PNG'
import bookemon from '../assets/Bookemon.gif'
import Refactoring from '../assets/127.0.0.1_5500_Develop_index2.html.PNG'
import PlentifulPantry from '../assets/PlentifulPantry.PNG'
import weatherDashboard from '../assets/Weather.PNG'
import Blognology from '../assets/blog.PGN'
// import Animation from 'Animation'


export default function Portfolio () {

    // function hoverAnimation (e) {
    //     console.log("hovering!")
    //     console.log(e.target)
    // }

    return (
        <div className='portfolio-card-container'>
            <div className='portfolio-card' id='portfolio-card-1'>
                <a href="https://tales64.github.io/New-Refactoring/#search-engine-optimization" target="_blank" rel="noreferrer">
                    <h5>Refactoring</h5>
                    <img src={Refactoring} className="d-block w-100" alt="hobby tracker website"/>
                    <p>This application allows the user to 'level up' as they complete tasks and get rewarded with YouTube videos based on their personal preferences.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-2'>
                <a href='https://gamehoard2022.herokuapp.com/' target="_blank" rel="noreferrer">
                    <h5>Game Hoard</h5>
                    <img src={gameHoard} className="d-block w-100" alt="app that tracks games you/others own"/>
                    <p>This app allows users to catalogue their game collection and find other users to play with. Uses SQL database and Handlebars Node.js package.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-3'>
                <a href="https://btay786.github.io/1-project-to-rule/" target="_blank" rel="noreferrer">
                    <h5>Bookemon</h5>
                    <img src={bookemon} className="d-block w-100" alt="weather dashboard app"/>
                    <p>Allows the user to check the weather for any city in the US; utilizes a 3rd party API. Utilizes local storage and a 3rd party weather API.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-4'>
                <a href='https://plentiful-pantry.herokuapp.com/api/users/login' target="_blank" rel="noreferrer">
                    <h5>Social Network API</h5>
                    <img src={PlentifulPantry} className="d-block w-100" alt="A social media API that returns user data as JSON"/>
                    <p>Utilizes a Mongo database to replicate social network functionality without a frontend.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-5'>
                <a href="https://tales64.github.io/Weather-Updater/" target="_blank" rel="noreferrer">
                    <h5>Weather or Not</h5>
                    <img src={weatherDashboard} className="d-block w-100" id="README-img" alt="Console/command line app that generates a README file"/>
                    <p>Allows a user to create a README file for their app in the console/command line through a series of prompts. Utilizes inquirer Node.js package.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-5'>
                <a href="Weather" target="_blank" rel="noreferrer">
                    <h5>Blognology</h5>
                    <img src={Blognology} className="d-block w-100" id="README-img" alt="Console/command line app that generates a README file"/>
                    <p>Allows a user to create a README file for their app in the console/command line through a series of prompts. Utilizes inquirer Node.js package.</p>
                </a>
            </div>
        </div>
    );
};