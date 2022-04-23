import React, { Component } from 'react';
import SkipComponent from './SkipComponent';
import WrapComponent from './WrapComponent';


class AppComponent extends Component {
    render() {
        return (
            <div id="app">
                <SkipComponent/>
                <WrapComponent/>
            </div>
        );
    }
}

export default AppComponent;