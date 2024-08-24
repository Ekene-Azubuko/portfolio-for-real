const Project = ({name, description, link, image}) => {
    return (
        <div className="timeline-component timeline-content project-card">
            <div className="project-card-image">
                <img src={image} alt={name}></img>
            </div>
            <div className="project-card-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <a className="cta btn btn-outline" href={link} target="_blank">View Project</a>
            </div>
         </div>
    )
};
export default Project;