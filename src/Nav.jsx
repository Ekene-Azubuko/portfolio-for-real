import "./App.css";
const Nav = () => {
    return(
        <nav class="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item mx-md-5">
                  <a class="nav-link " aria-current="page" href="#home">HOME</a>
                </li>
                <li class="nav-item mx-md-5">
                  <a class="nav-link" href="#about">ABOUT</a>
                </li>
                <li class="nav-item mx-md-5">
                  <a class="nav-link" href="#projects">PROJECTS</a>
                </li>
                <li class="nav-item mx-md-5">
                  <a class="nav-link" href="#contact">HIRE ME</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
};
export default Nav;