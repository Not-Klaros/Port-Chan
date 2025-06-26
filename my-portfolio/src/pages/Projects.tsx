const projectTitles = ['Project One', 'Project Two', 'Project Three'];

const Projects = () => (
  <div className="projects-layout">
    <div className="project-left">
      <h1 className="sticky-title">Projects</h1>
      {projectTitles.map((title) => (
        <div key={title} className="category-box">
          {title}
        </div>
      ))}
    </div>
    <div className="project-right">
      <div className="project-grid">
        {projectTitles.map((title) => (
          <div key={title} className="project-item">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magnam numquam, autem facere officia placeat eum unde quas aspernatur
              eligendi deleniti corporis, libero cupiditate id esse eaque at iure nemo eos.
              Maiores inventore laborum expedita doloribus explicabo. Amet ut totam officiis
              facilis maxime, est iure laborum.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;