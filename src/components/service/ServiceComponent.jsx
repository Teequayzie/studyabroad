import React from 'react';

const ServiceComponent = () => {
    const content = [
        {
            title: "Visa Assistance",
            content: "We provide the simplest solution to process your travel Visases (student and Tourist)",
            icon: "",
        },
        {
            title: "Flight Booking",
            content: "We assist consumers with booking and planning their trips, with us you are guaranteed to get the best flight deals",
            icon: "",
        },
        {
            title: "Accommodation",
            content: "We assist consumers with booking student accommodation, vacation stays abroad, hostels, hotels etc",
            icon: "",
        }
    ]
    return (
        <div id="services" class="section lb">
            <div class="container">
                <div class="section-title text-center">
                    <h3>We Offer</h3>
                    <p>We provide you with the options to explore opportunities to study globally</p>
                </div>
                <div class="row">
                    {content.map(function (value, index) {
                       return <div class="col-md-4">
                            <div class="services-inner-box btn-hover-lt">
                                <div class="ser-icon">
                                    <i class="flaticon-seo"></i>
                                </div>
                                <h2>{value.title}</h2>
                                <p>{value.content}}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent;