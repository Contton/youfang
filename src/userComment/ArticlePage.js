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

    doWatch(){
        alert("关注成功")
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