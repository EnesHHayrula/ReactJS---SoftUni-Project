export default function Header(){
    return(
        <header>
        {/* header inner */}
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          {" "}
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="products.html">
                          Products{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item d_none">
                        <a className="nav-link" href="#">
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                      <li className=" d_none get_btn">
                        <a href="#">Get a quote</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}
