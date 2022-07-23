import React from "react";

function Footer() {

  return (
        <div>
              <footer className="page-footer font-small cyan darken-3" id="footer">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 py-5">
                              <div className="mb-5 flex-center">
                                  <a className="hovericon" href="https://github.com/bernieip">
                                      <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                  </a>
                                  <a className="hovericon" href="https://www.linkedin.com/in/bernie-ip/">
                                      <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                  </a>
                                  <a className="hovericon" href={require("../components/images/testresume.pdf")} >
                                      <i className="far fa-file fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="footer-copyright text-center py-3">© 2020 Copyright
                  </div>
              </footer>
        </div>
  );
}

export default Footer;