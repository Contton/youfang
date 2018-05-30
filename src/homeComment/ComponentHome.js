import React, { Component } from 'react';
import ComponentPicture from './ComponentPicture';
import ComponentContent from './CommentContent';
import ComponentAboute from '../abouteComment/CommentAbout';

class ComponentHome extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
                <div className="route_all">
                    <ComponentPicture push = {this.props.history.push}/>
                    <ComponentContent push = {this.props.history.push}/>
                    <ComponentAboute/>
                </div>
        );
    }
}

export default ComponentHome;