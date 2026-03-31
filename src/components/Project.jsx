const Project = ({ name, description, liveUrl, githubUrl, technologies }) => {
  return (
    <article className="project-card">
      <div className="project-card-text">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-tech-list">
          {technologies.map((technology) => (
            <div className="project-tech-chip" key={technology.name}>
              <img
                alt={`${technology.name} logo`}
                className={`project-tech-logo${technology.invert ? ' project-tech-logo-invert' : ''}`}
                src={technology.logo}
              />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="project-card-links">
        {liveUrl && (
          <a
            aria-label={`Open live project for ${name}`}
            className="project-icon-link"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-link"></i>
          </a>
        )}
        {githubUrl && (
          <a
            aria-label={`Open GitHub repository for ${name}`}
            className="project-icon-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </article>
  )
}

export default Project;
