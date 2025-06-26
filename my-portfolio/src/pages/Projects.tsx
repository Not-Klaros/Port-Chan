import Project1Image from '../assets/projects/project1.svg';
import Project2Image from '../assets/projects/project2.svg';
import Project3Image from '../assets/projects/project3.svg';

interface Project {
  title: string;
  image: string;
}

const projects: Project[] = [
  { title: 'Project One', image: Project1Image },
  { title: 'Project Two', image: Project2Image },
  { title: 'Project Three', image: Project3Image },
];

const Projects = () => (
  <div className="projects-layout">
    <div className="project-left">
      <h1 className="sticky-title">Projects</h1>
      {projects.map((project) => (
        <div key={project.title} className="category-box">
          {project.title}
        </div>
      ))}
    </div>
    <div className="project-right">
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magnam numquam, autem facere officia placeat eum unde quas aspernatur
              eligendi deleniti corporis, libero cupiditate id esse eaque at iure nemo eos.
              Maiores inventore laborum expedita doloribus explicabo. Amet ut totam officiis
              facilis maxime, est iure laborum.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;