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