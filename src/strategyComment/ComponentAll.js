import React, { Component } from 'react';
import ComponentStrategy from './ComponentStrategy';
import ComponentAboute from '../abouteComment/CommentAbout';

class ComponentAll extends Component{
    render(){
        return(
            <div>
                <ComponentStrategy/>
                <ComponentAboute/>
            </div>
        );
    }
}

export default ComponentAll;