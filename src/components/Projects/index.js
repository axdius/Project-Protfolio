import {useProjectContext} from '../../context/ProjectContext'
import './index.css'

const Projects = () => {
  const {projectsList} = useProjectContext()

  return (
    <>
      <div className="main-container">
        <h1 className="heading">Projects</h1>
        <hr className="hr" />
        <ul className="project-list-container">
          {projectsList.map(project => (
            <li className="project-item">
              <div className="project-card">
                <h1 className="project-name">{project.projectName}</h1>
                <p className="description">{project.description}</p>
                <button type="button" className="view-button">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Projects
