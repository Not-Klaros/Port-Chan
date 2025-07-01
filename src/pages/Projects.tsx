import { useEffect, useState } from 'react';

interface Project {
  _id: string;
  title: string;
  image: string;
  description: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load projects', err));
  }, []);

  return (
    <div className="projects-layout">
      <div className="project-left">
        <h1 className="sticky-title">Projects</h1>
        {projects.map((project) => (
          <div key={project._id} className="category-box">
            {project.title}
          </div>
        ))}
      </div>
      <div className="project-right">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-item">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
