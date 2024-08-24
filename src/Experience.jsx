const Experience = ({position, period, company, roles, isCollapsed}) => {
    return (
        <>
          <div className="wrap ">
            <h2>{position}</h2>
            <h2>{period}</h2>
            <i className={`fa-solid ${ isCollapsed? "fa-minus" : "fa-plus"}`}></i>
          </div>
          <div className={`dropdown ${ isCollapsed ? "expanded" : ""}`}>
            <h3>{company}</h3>
            <h4>{position}</h4>
            <ul>
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </>
    )
};
export default Experience;