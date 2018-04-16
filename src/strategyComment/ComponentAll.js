import React, { Component } from 'react';
import ComponentStrategy from './ComponentStrategy';
import ComponentAboute from '../abouteComment/CommentAbout';
import ComponentFind from '../placeComment/ComponentFind';

class ComponentAll extends Component{
    render(){
        return(
            <div className="list_aboute">
                <ComponentFind/>
                <ComponentStrategy/>
                <ComponentAboute/>
            </div>
        );
    }
}

export default ComponentAll;