import {useHistory} from 'react-router-dom'
import {useProjectContext} from '../../context/ProjectContext'
import './index.css'

const About = () => {
  const {projectData, setProjectData, addProjectToList} = useProjectContext()
  const history = useHistory()

  const handleInputChanges = e => {
    const {name, value} = e.target
    setProjectData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmitForm = e => {
    e.preventDefault()
    addProjectToList()
    history.push('/projects')

    setProjectData({
      projectName: '',
      projectLink: '',
      description: '',
    })
  }

  const onClickProjectButton = () => {
    history.push('/projects')
  }

  return (
    <>
      <div className="main-container">
        <div className="about-container">
          <div className="info-container">
            <p className="designation">UI/UX designer</p>
            <h1 className="intro">Hello, my name is Prashant Kumar</h1>
            <p className="about-me">
              I am a Web designer with a B.Tech background, specializing in
              HTML, CSS, JavaScript, and React. Passionate about crafting
              seamless digital experiences. Enjoys traveling and bike riding in
              free time.
            </p>
            <div className="button-container">
              <button
                type="button"
                className="project"
                onClick={onClickProjectButton}
              >
                Projects
              </button>
              <button type="button" className="linked-in">
                <a
                  href="https://www.linkedin.com/in/prashant-kumar-8a2291215/"
                  target="_"
                >
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
          <div className="image" />
        </div>
        <form onSubmit={onSubmitForm} className="add-project-form">
          <h1 className="heading">Add Project</h1>
          <div className="from-content">
            <label className="label" htmlFor="projectName">
              Project Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Project Name"
              value={projectData.projectName || ''}
              name="projectName"
              required
              onChange={handleInputChanges}
            />
            <label className="label" htmlFor="projectName">
              Project Link
            </label>
            <input
              type="text"
              className="input"
              value={projectData.projectLink || ''}
              name="projectLink"
              required
              onChange={handleInputChanges}
              placeholder="Project Link"
            />
            <label className="label" htmlFor="projectName">
              Description
            </label>
            <textarea
              rows="4"
              cols="30"
              className="input"
              value={projectData.description || ''}
              name="description"
              required
              onChange={handleInputChanges}
              placeholder="Description"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default About
