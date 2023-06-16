import React from 'react';

const skillsData = {
    icons: [
        // WEB
        {
            name: "JavaScript",
            class: "devicon-javascript-plain"
        },
        {
            name: "React",
            class: "devicon-react-original"
        },
        {
            name: "NodeJS",
            class: "devicon-nodejs-plain"
        },
        {
            name: "CSS 3",
            class: "devicon-css3-plain"
        },


        // DATA
        {
            name: "Python",
            class: "devicon-python-plain"
        },
        {
            name: "Jupyter",
            class: "devicon-jupyter-plain"
        },

        {
            name: "Numpy",
            class: "devicon-numpy-original"
        },
        {
            name: "Pandas",
            class: "devicon-pandas-original"
        },



        // TEST + sekalaiset
        {
            name: "Cucumber",
            class: "devicon-cucumber-plain"
        },
        {
            name: "Selenium",
            class: "devicon-selenium-original"
        },
        {
            name: "Linux",
            class: "devicon-linux-plain"
        },
        {
            name: "Bash",
            class: "devicon-bash-plain"
        },
        {
            name: "Docker",
            class: "devicon-docker-plain"
        },
        {
            name: "Git",
            class: "devicon-git-plain"
        },
        {
            name: "Java",
            class: "devicon-java-plain"
        },
        {
            name: "Haskell",
            class: "devicon-haskell-plain"
        },

    ]
};

const SkillsSection = () => {
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

export default SkillsSection;
