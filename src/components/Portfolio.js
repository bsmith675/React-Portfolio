import React from 'react';

function Portfolio() {
    return (
        <div>
            <section className="colored-section" id="Portfolio">
                <div id="Portfolio-carousel" className="carousel slide" data-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active container-fluid">
                            <h2 className="Portfolio-text">JobRocket (Project 1)</h2>
                            <a className="hovericon" href="https://github.com/michaelhrivnak/JobRocket">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://michaelhrivnak.github.io/JobRocket/">
                                <img src={require("../components/images/JobRocket.png")} height="183" width="275" alt="JobRocket" />
                            </a>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="Portfolio-text">AirDate (Project 2)</h2>
                            <a className="hovericon" href="https://github.com/saltamay/UofT_BootCamp_Project-2">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://uoft-project2.herokuapp.com/">
                                <img src={require("../components/images/AirDate.png")} height="183" width="275" alt="AirDate" />
                            </a>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="Portfolio-text">User Directory</h2>
                            <a className="hovericon" href="https://github.com/bernieip/react-userdirectory">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://sleepy-cove-72047.herokuapp.com/">
                                <img src={require("../components/images/Userdirectory.png")} height="183" width="275" alt="UserDirectory" />
                            </a>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="Portfolio-text">Code Quiz</h2>
                            <a className="hovericon" href="https://github.com/bernieip/codequiz">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://bernieip.github.io/codequiz/">
                                <img src={require("../components/images/codequiz.png")} height="183" width="275" alt="CodeQuiz" />
                            </a>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="Portfolio-text">Weather Planner</h2>
                            <a className="hovericon" href="https://github.com/bernieip/weatherapp">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://bernieip.github.io/weatherapp/">
                                <img src={require("../components/images/weatherplanner.png")} height="183" width="275" alt="WeatherPlanner" />
                            </a>
                        </div>
                        <div className="carousel-item container-fluid">
                            <h2 className="Portfolio-text">Note Taker</h2>
                            <a className="hovericon" href="https://github.com/bernieip/notetaker">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a href="https://cryptic-retreat-30790.herokuapp.com/">
                                <img src={require("../components/images/notetaker.png")} height="183" width="275" alt="noteTaker" />
                            </a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#Portfolio-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#Portfolio-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>

            </section>
        </div>
    )
}

export default Portfolio;