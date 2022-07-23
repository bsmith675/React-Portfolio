import React from 'react';

function Features() {

    return (
        <div>
            <section className="white-section" id="features">

                <div className="container-fluid">

                    <div className="row">
                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-check-circle fa-4x"></i>
                            <h3 className="feature-title">Title 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-bullseye fa-4x"></i>
                            <h3 className="feature-title">Title 2</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-heart fa-4x"></i>
                            <h3 className="feature-title">Title 3</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas</p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}


export default Features;