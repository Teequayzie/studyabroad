import React from 'react';
import banner1 from '../../../src/uploads/studyabroadbanner08.jpg'
import banner2 from '../../../src/uploads/studyabroadbanner12.jpg'
const HeaderComponent = () => {
    return (
        <div>
            <div id="preloader">
                <div id="loader">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">
                        
                    </a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <i class="fa fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger active" href="#content">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" target="_blank" href="https://wa.me/+233545156901">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="content">
		        <div id="slider">
		            <img src={banner2} alt="STUDY IN UKRAINE" data-url=""/>
		            <img src={banner1} alt="STUDY IN CYPRUS" data-url=""/>
		        </div>
	        </div>
        </div>
    )
}

export default HeaderComponent;
