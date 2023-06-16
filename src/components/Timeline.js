import React from 'react';
import '../styles.css';

const Timeline = () => {


const workHistoryData = [
  {
    duration: '2022-',
    title: 'Research Assistant',
    place: 'Turku University',
    details: 'Research Assistant in Green Metrics for Public Digitalization Acquisitions. The goal of the project was to make easy-to-use green metrics for IT-projects,' +
      'Also worked as a teaching assistant on courses: Basics of programming, Basics of object-oriented programming, and tools for programming',
    skills: ['Web Development', 'Selenium', 'Sustainability', 'Sustainability', 'Teaching']
  },
  {
    duration: '03/2022 - 09/2022',
    title: 'Customer Service Specialist',
    place: 'IKEA',
    details: 'Pushed trolleys from outside to inside. Occasionally helped customers with their needs.',
    skills: ['Customer Service'],
  },
  {
    duration: '10/2021 - 03/2022',
    title: 'Teaching assistant',
    place: 'Turku University',
    details: 'Teaching assistant on courses: Basics of programming, and Basics of object-oriented programming',
    skills: ['Teaching']
  },
  {
    duration: '05/2021 - 08/2021',
    title: 'Customer Service Specialist',
    place: 'Rainmaker Oy',
    details: 'Telia customer service through phone & chat.',
    skills: ['Customer Service', 'Selling']
  },
];

const educationData = [
  {
    duration: '2022-',
    title: 'MSc Data Science & Software Engineering',
    place: 'Turku University',
    details: 'Major: Data-Analytics, Minor: Software Engineering. Currently ongoing, planned schedule for graduation in 2024.',
    skills: ['Data Analytics', 'Software Engineering', 'Python', 'Machine Learning', 'Testing', 'Devops']
  },
  {
    duration: '2020-2023',
    title: 'B.Sc. Computer Science',
    place: 'Turku University',
    details: 'Major: Computer Science, Minors: Information Systems & Math. Title of bachelor\'s thesis: Convolutional Neural Networks in Medical Imaging, grade: 4.' +
      ' Overall GPA: ~3.6',
    skills: ['Computer Science', 'Information Systems', 'Math', 'Java & Python']
  },
  {
    duration: '2017-2020',
    title: 'High school graduate',
    place: 'Vammalan lukio',
    skills: [],
  },
];


const renderWorkTimelineItems = () => {
  return workHistoryData.map((item, index) => (
    <li key={index} className="timeline-list-item">
      <div className="timestamp">{item.duration} </div>
      <div className="item-title">
        {item.title}, {item.place}
      </div>
      <p>{item.details}</p>
      <ul className="skills-list">
        {item.skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </li>
  ));
};

const renderEducationTimelineItems = () => {
  return educationData.map((item, index) => (
    <li key={index} className="timeline-list-item">
      <div className="timestamp">{item.duration}</div>
      <div className="item-title">
        {item.title}, {item.place}
      </div>
      <p>{item.details}</p>
      <ul className="skills-list">
        {item.skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </li>
  ));
};
  return (
    <div className="experience-container">
      <div className="timeline-container">
          <div className="timeline-work">
            <h2> Work Experience </h2>
            <ul className="timeline-list" data-content id="work">
              {renderWorkTimelineItems()}
            </ul>
          </div>

          <div className="timeline-education">
            <h2> Education </h2>
            <ul className="timeline-list" data-content id="education">
              {renderEducationTimelineItems()}
            </ul>
          </div>

      </div>
    </div>
  );
};

export default Timeline;
