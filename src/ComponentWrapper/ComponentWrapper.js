import React, { Component } from 'react';
import './ComponentWrapper.css'
class ComponentWrapper extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.children}
            </div>
        );
    }
}

export default ComponentWrapper;
