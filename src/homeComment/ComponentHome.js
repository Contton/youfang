import React, { Component } from 'react';
import ComponentPicture from './ComponentPicture';
import ComponentContent from './CommentContent';
import ComponentAboute from '../abouteComment/CommentAbout';

class ComponentHome extends Component{

    render(){
        return(
                <div className="route_all">
                    <ComponentPicture/>
                    <ComponentContent/>
                    <ComponentAboute/>
                </div>
        );
    }
}

export default ComponentHome;