'use strict'
import React from 'react';
import ArticleComponent from '../strategyPageComment/ArtilcleComponent';

import UserTitleComponent from './UserTitleComponent';
import ComponentAbout from '../abouteComment/CommentAbout';
import CommentList from './CommentList';
import '../css/comment.css'

class Articlepage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return(
            <div>
                <UserTitleComponent/>
                <ArticleComponent articleId={this.props.match.params.id}/>
                <CommentList articleId={this.props.match.params.id}/>
                <ComponentAbout/>
            </div>
        );
    }
}

export default Articlepage;