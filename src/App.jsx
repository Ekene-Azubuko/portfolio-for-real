import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import Nav from './components/Nav'
import Project from './components/Project'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Experiences from './data/experiences'
import Projects from './data/projects'
import Skills from './data/skills'
import TechnologyCatalog from './data/technologyCatalog'
import './App.css'

function App() {

  const [collapsed, setCollapsed] = useState(null)
  const handleClick = (index) => {
    if (collapsed === index) {
      setCollapsed(null)
    } else {
      setCollapsed(index)
    }
  }

  return (
    <div className="App">
      <Analytics/>
      <Nav />
      <section className="container hero-section" id="home">
        <div className="text-box">
          <p>Hi there,</p>
          <h1>I'm Ekene Azubuko</h1>
          <h2>I am into Full Stack Web Development</h2>
          <p>I make websites and write a lot of code. Some run while some don't but you get the idea.</p>
          <div className="hero-actions">
            <a href="#contact" className="cta btn btn-outline">Contact me</a>
            <a href="https://drive.google.com/file/d/12IzsR-CZOmyz32Lw4fDTl45yVQMB03Gj/view?usp=drive_link" className="cta btn btn-outline" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="static/images/bitmoji.jpg"></img>
        </div>
      </section>
      <section className="about-me" id="about">
        <h1>About Me</h1>
        <div className="accordion-and-bio">
          <div className="bio">
            <h1>Bio</h1>
            <p>I am a passionate programmer and full-stack web developer with a drive for solving complex problems and building impactful products.
              I am actively seeking opportunities to apply and grow my skills in a collaborative, fast-paced environment
              </p>
          </div>
          <div className="experience-container">
            <h3>Experience</h3>
            {Experiences.map((experience, index) => (
              <Experience
                key={index}
                isExpanded={collapsed === index}
                onChange={() => handleClick(index)}
                position={experience.position}
                period={experience.period}
                company={experience.company}
                roles={experience.roles}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="project-section" id="projects">
        <h1>My Projects</h1>
        <div className="project-grid">
          {Projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              technologies={project.technologies.map((technology) => TechnologyCatalog[technology])}
            />
          ))}
        </div>
      </section>
      <section className="skills-section" id="skills">
        <h1>Tech Stack</h1>
        <div className="skills-categories">
          {Skills.map((group) => (
            <section className="skill-category" key={group.category}>
              <h2>{group.category}</h2>
              <div className="skills-grid">
                {group.items.map((skill) => {
                  const technology = TechnologyCatalog[skill]

                  return (
                    <article className="skill-card" key={skill}>
                      <img
                        alt={`${technology.name} logo`}
                        className={`skill-logo${technology.invert ? ' skill-logo-invert' : ''}`}
                        src={technology.logo}
                      />
                      <h3>{technology.name}</h3>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-text">
          <h1>Contact</h1>
          <p>Send me a message or contact me using the links below</p>
        </div>
        <div className="contacts">
          <div className="social-container">
            <a href="https://github.com/Ekene-Azubuko" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <p>Github</p>
            </a>
            <a href="http://www.linkedin.com/in/ekene-azubuko-b4a53b288" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
            <a href="https://www.instagram.com/k__e__n__z__o.__/" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <p>Instagram</p>
            </a>
            <a href="mailto:ekeneazubuko2935@gmail.com" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
            </a>
          </div>
          {/* <div className="form-container">
            <form>
              <div className="name-and-email">
                <div className="form-group input-box">
                  <input type="text" id="name" name="name" placeholder="Name" className="form-control undefined" required></input>
                </div>
                <div className="form-group input-box"></div>
              </div>
              <div className="form-group textarea">
                <textarea id="message" name="message" placeholder="Message" className="form-control undefined" required></textarea>
              </div>
              <div className="button-container">
                <button type="submit" className="cta btn btn-primary">Submit</button>
              </div>
            </form>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
   )
}

export default App
