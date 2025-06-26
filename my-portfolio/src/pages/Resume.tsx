import { useEffect, useState } from 'react';

interface Experience {
  _id: string;
  role: string;
  company: string;
  dates: string;
  description: string;
}

interface Education {
  _id: string;
  degree: string;
  school: string;
  dates: string;
}

interface Skill {
  _id: string;
  name: string;
}

const Resume = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch('/api/resume')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills);
        setExperiences(data.experiences);
        setEducation(data.education);
      })
      .catch((err) => console.error('Failed to load resume', err));
  }, []);

  return (
    <div className="resume-layout">
      <div className="resume-left">
        <h1>Carlos Rodriguez</h1>
      <p>Email: rodrigcp22@outlook.com</p>
      <p>Location: Australia</p>
      <div className="resume-section">
        <h2>Technical Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill._id}>{skill.name}</li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h2>Soft Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill._id + '-soft'}>{skill.name}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="resume-right">
        <div className="resume-section">
          <h2>Experience</h2>
          {experiences.map((exp) => (
            <div key={exp._id} className="resume-item">
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
            <div key={edu._id} className="resume-item">
              <h3>{edu.school}</h3>
              <span className="resume-dates">{edu.degree}</span>
              <p>{edu.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
