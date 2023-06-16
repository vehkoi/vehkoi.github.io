import React from 'react'
import '../styles.css'

function Hero () {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <div className='hero-header'>
                    <h1> Hi, I am Veeti</h1>
                </div>
                <div className='hero-subheader'>
                    <h2> Research Assistant / Software Dev </h2>
                </div>
                <div className='hero-introtext'>
                    <p> I am a 21-year-old developer from Finland. I am currently working as a research assistant at the University of Turku. 
                        Besides working, I am studying to become a computer science engineer, majoring in data analytics. </p>
                </div>
            </div>
            <div className='hero-pic'>
                <img style={{ width: "100%", height: "100%" }} src={require('../images/kuva.jpg')} alt='Me' />
            </div> 
        </div>
    )
}

export default Hero