import ButtonComponent from "./ButtonComponent";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom d-flex sticky-top container-fluid navbar__main--white">
      <div className="container-lg div__navbar-main d-flex justify-content-between">
        <div className="div__logo-search d-flex">
          <div className="container d-flex justify-content-around align-items-center">
            <a className="navbar-brand" href="#">
              <img
                className="img__DEVlogo"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt=""
              />
            </a>
            <form className="d-flex form__search-box-nav" role="search">
              <input
                className="form-control me-2 imput__form-control d-none d-sm-none d-md-block"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <img
                src="./assets/magnifyer.svg"
                alt=""
                className="img__magnifier d-inline-block position-absolute"
              />
            </form>
          </div>
        </div>
        <div className="div__user-menu d-flex align-items-center">
          <button className="button__create-post mx-1 d-none d-sm-none d-md-block">
            Create Post
          </button>
          <ButtonComponent buttonText="auauaua" />
          <ButtonComponent buttonText="EMI ES EL PRRO AMO" />
          <button className="button__bell mx-1">
            <img
              src="./assets/notificationbell.svg"
              alt=""
              className="img__bell"
            />
          </button>
          <div className="nav-item dropdown mx-1 me-5">
            <a
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/user photo.webp"
                alt=""
                className="img__login rounded-circle align-items-center"
              />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  User name
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Create Post
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reading List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
