import React from 'react';
import '../styles.css'

const skillsData = {
    icons: [

        // DATA
        {
            name: "Python",
            class: "devicon-python-plain colored"
        },
        {
            name: "Numpy",
            class: "devicon-numpy-original colored"
        },
        {
            name: "Pandas",
            class: "devicon-pandas-original colored"
        },
        {
            name: "Linux",
            class: "devicon-linux-plain colored"
        },
        {
            name: "Docker",
            class: "devicon-docker-plain colored"
        },



        // WEB
        {
            name: "JavaScript",
            class: "devicon-javascript-plain colored"
        },
        {
            name: "React",
            class: "devicon-react-original colored"
        },
        {
            name: "NodeJS",
            class: "devicon-nodejs-plain colored"
        },
        {
            name: "HTML 5",
            class: "devicon-html5-plain colored"
        },
        {
            name: "CSS 3",
            class: "devicon-css3-plain colored"
        },




        // TEST + sekalaiset
        {
            name: "Cucumber",
            class: "devicon-cucumber-plain colored"
        },
        {
            name: "Selenium",
            class: "devicon-selenium-original colored"
        },
        {
            name: "Bash",
            class: "devicon-bash-plain colored"
        },
        {
            name: "Git",
            class: "devicon-git-plain colored"
        },
        {
            name: "Java",
            class: "devicon-java-plain colored"
        },
        {
            name: "Haskell",
            class: "devicon-haskell-plain colored"
        },

    ]
};

const Skills = () => {
    const { icons } = skillsData;

    return (
        <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {icons.map((icon, index) => (
                    <div key={index} className="skill-box">
                        <i className={icon.class}></i>
                        <span>{icon.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
