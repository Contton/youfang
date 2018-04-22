import React, { Component } from 'react';
import ComponentFind from './ComponentFind';
import ComponentPlace from './ComponentPlace';
import ComponentAbout from '../abouteComment/CommentAbout';

class ComponentAll extends React.Component{
    render(){
        return(
            <div className="place">
                <ComponentFind/>
                <ComponentPlace/>
                <ComponentAbout/>
            </div>
        );
    }
}
export default ComponentAll;