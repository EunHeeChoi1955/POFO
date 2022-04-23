import React, { Component } from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';

class WrapComponent extends Component {
    render() {
        return (
            <div>
                <div id="wrap">
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>
                </div>
            </div>
        );
    }
}

export default WrapComponent;