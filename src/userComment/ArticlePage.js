'use strict'
import React from 'react';
import ArticleComponent from '../travelPageComment/ArtilcleComponent';

import UserTitleComponent from './UserTitleComponent';
import ComponentAbout from '../abouteComment/CommentAbout';

import '../css/comment.css'

class ArticlePage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return(
            <div>
                <UserTitleComponent/>
                <ArticleComponent push={this.props.history.push} articleId={this.props.match.params.id}/>
                <ComponentAbout/>
            </div>
        );
    }
}

export default ArticlePage;