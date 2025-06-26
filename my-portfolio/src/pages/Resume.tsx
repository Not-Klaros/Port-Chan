import React from 'react';

const skills = ['TypeScript', 'React', 'Node.js', 'Python'];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Example Corp',
    dates: '2023 - Present',
    description:
      'Developing web applications and services using modern JavaScript frameworks.',
  },
  {
    role: 'Junior Developer',
    company: 'Startup Inc.',
    dates: '2021 - 2023',
    description:
      'Worked on frontend interfaces and collaborated closely with design teams.',
  },
];

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Tech University',
    dates: '2017 - 2021',
  },
];

const Resume = () => (
  <div className="resume-layout">
    <div className="resume-left">
      <h1>John Doe</h1>
      <p>Email: john.doe@example.com</p>
      <p>Location: Anywhere</p>
      <div className="resume-section">
        <h2>Skills</h2>
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
            <h3>{edu.degree}</h3>
            <span className="resume-dates">{edu.school}</span>
            <p>{edu.dates}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resume;
