import React from "react";

function Header() {
  return (
      <div>
              <section className="colored-section" id="title">
                  <div className="container-fluid">
                      <nav className="navbar navbar-expand-lg navbar-dark">
                          <button className="navbar-toggler" type="button" data-toggle="collapse"
                                  data-target="#navbarTogglerDemo02">
                              <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                              <ul className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                      <a className="nav-link" href="#Portfolio">Portfolio</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#footer">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                      <div className="row">
                          <div className="col-lg-6">
                              <h1 className="big-heading">Hello, I'm Benjamin Smith.</h1>
                          </div>
                      </div>
                  </div>
              </section>
    </div>

  );
}

export default Header;