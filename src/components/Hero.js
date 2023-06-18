import React from 'react'
import '../styles.css'
import Typed from "react-typed"

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <div className='hero-header'>
                    <h1> Hi, I am Veeti</h1>
                </div>
                <div className='hero-subheader'>
                    <Typed
                        strings={[
                            "Software Developer",
                            "Data Analytics Student",
                            "Research Assistant",
                            "Machine Learning Enthusiast"
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                </div>
                <div className='hero-introtext'>
                    <p> I am a 22-year-old developer from Finland. I am currently working as a research assistant at the University of Turku.
                        Besides working, I am studying to become a computer science engineer, majoring in data analytics. Feel free to contact me: 
                        <a href="mailto:veeti.koivuniemi@gmail.com"> veeti.koivuniemi@gmail.com</a>
                        </p>
                </div>
            </div>
            <div className='hero-pic'>
                <img style={{ width: "100%", height: "100%" }} src={require('../images/kuva.jpg')} alt='Me' />
            </div>
        </div>
    )
}

export default Hero