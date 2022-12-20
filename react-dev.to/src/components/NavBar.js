function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom d-flex sticky-top container-fluid navbar__main--white">
      <div class="container-lg div__navbar-main d-flex justify-content-between">
        <div class="div__logo-search d-flex">
          <div class="container d-flex justify-content-around align-items-center">
            <a class="navbar-brand" href="#">
              <img
                class="img__DEVlogo"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt=""
              />
            </a>
            <form class="d-flex form__search-box-nav" role="search">
              <input
                class="form-control me-2 imput__form-control d-none d-sm-none d-md-block"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                place
              />
              <img
                src="./assets/magnifyer.svg"
                alt=""
                class="img__magnifier d-inline-block position-absolute"
              />
            </form>
          </div>
        </div>
        <div class="div__user-menu d-flex align-items-center">
          <button class="button__create-post mx-1 d-none d-sm-none d-md-block">
            Create Post
          </button>
          <button class="button__bell mx-1">
            <img src="./assets/notificationbell.svg" alt="" class="img__bell" />
          </button>
          <div class="nav-item dropdown mx-1 me-5">
            <a
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="./assets/user photo.webp"
                alt=""
                class="img__login rounded-circle align-items-center"
              />
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  User name
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Create Post
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Reading List
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
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
