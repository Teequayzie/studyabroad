import React from 'react';
import about_04 from '../../uploads/studyabroadbanner09.jpg'
const AboutComponent = () => {
    return (
        <div id="about" class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="right-box-pro">
                            <img src={about_04} alt="" class="img-fluid img-rounded" />
                            <div class="card-back"></div>
                            <div class="card-front"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="message-box">
                            <h2>Study in Ukraine or Cyprus</h2>
                            <p> At RM agency, we are an agency with more than a decade of experience, recruiting students to universities across europe.</p>
                            <p>We also support students in all procedures for admission, accommodation and any other study related issues.</p>
                            <a target="_blank" href="https://wa.me/+233545156901" class="sim-btn btn-hover-lt"><span class="btn-text">Contact Us</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;