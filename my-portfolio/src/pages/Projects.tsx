const categories = ['Web', 'Mobile', 'Data Science'];
const projectTitles = ['Project One', 'Project Two', 'Project Three'];

const Projects = () => (
  <div className="projects-layout">
    <div className="project-left">
      {categories.map((cat) => (
        <div key={cat} className="category-box">
          {cat}
        </div>
      ))}
    </div>
    <div className="project-right">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectTitles.map((title) => (
          <div key={title} className="project-item">
            {title}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;