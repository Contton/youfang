import React, { Component } from 'react';
import ComponentUser from './ComponentUser';
import ComponentAbout from '../abouteComment/CommentAbout';

class ComponentAll extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ComponentUser push={this.props.history.push}/>
                <ComponentAbout/>
            </div>
        );
    }
}

export default ComponentAll;