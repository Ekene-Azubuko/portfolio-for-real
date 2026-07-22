const Nav = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item mx-md-5">
                  <a className="nav-link " aria-current="page" href="#home">HOME</a>
                </li>
                <li className="nav-item mx-md-5">
                  <a className="nav-link" href="#about">ABOUT</a>
                </li>
                <li className="nav-item mx-md-5">
                  <a className="nav-link" href="#projects">PROJECTS</a>
                </li>
                <li className="nav-item mx-md-5">
                  <a className="nav-link" href="#contact">HIRE ME</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
};
export default Nav;
