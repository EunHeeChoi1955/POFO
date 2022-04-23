import React, { Component } from 'react';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';
import Section3Component from './main/Section3Component';
import Section4Component from './main/Section4Component';
import Section5Component from './main/Section5Component';

class MainComponent extends Component {
    render() {
        return (
            <main id="main">
                <Section1Component/>
                <Section2Component/>
                <Section3Component/>
                <Section4Component/>
                <Section5Component/>
            </main>
        );
    }
}

export default MainComponent;