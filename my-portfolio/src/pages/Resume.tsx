import React from 'react';

const skills = ['TypeScript', 'React', 'Node.js', 'Python'];

const experiences = [
  {
    role: 'Crew Member',
    company: 'Guzman y Gomez',
    dates: '2023 - Present',
    description:
      'Developing web applications and services using modern JavaScript frameworks.',
  },
  {
    role: 'Game Development',
    company: 'Academy of Interactive Technology',
    dates: '2022 - 2022',
    description:
      'Worked on programming player activities and events.',
  },
  {
    role: 'Game Design and Animation',
    company: 'JMC Academy',
    dates: '2022 - 2022',
    description:
      'Worked on animation of characters for video games.',
  },
];

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of Wollongong',
    dates: '2025 - 2028',
  },
  {
    degree: "",
    school: "Figtree High Scool",
    dates: "2021 - 2024",
  },
  {
    degree: "Computer Science",
    school: "NCSS Summer School",
    dates: "2024 - 2024",
  }
];

const Resume = () => (
  <div className="resume-layout">
    <div className="resume-left">
      <h1>Carlos Rodriguez</h1>
      <p>Email: rodrigcp22@outlook.com</p>
      <p>Location: Australia</p>
      <div className="resume-section">
        <h2>Technical Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h2>Soft Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="resume-right">
      <div className="resume-section">
        <h2>Experience</h2>
        {experiences.map((exp) => (
          <div key={`${exp.role}-${exp.company}`} className="resume-item">
            <h3>
              {exp.role} — {exp.company}
            </h3>
            <span className="resume-dates">{exp.dates}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="resume-section">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.school} className="resume-item">
            <h3>{edu.school}</h3>
            <span className="resume-dates">{edu.degree}</span>
            <p>{edu.dates}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resume;
