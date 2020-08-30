import React from 'react';
import ServiceComponent from '../service/ServiceComponent';
import AboutComponent from '../about/AboutComponent';

export const BodyComponent = () => {
    return (
        <div>
            <AboutComponent></AboutComponent>
            <ServiceComponent></ServiceComponent>
        </div>
    )
}

export default BodyComponent;