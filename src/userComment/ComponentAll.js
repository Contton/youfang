import React, { Component } from 'react';
import ComponentUser from './ComponentUser';
import ComponentAbout from '../abouteComment/CommentAbout';

class ComponentAll extends React.Component{
    render(){
        return(
            <div>
                <ComponentUser/>
                <ComponentAbout/>
            </div>
        );
    }
}

export default ComponentAll;