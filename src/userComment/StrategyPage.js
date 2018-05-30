'use strict'
import React from 'react';
import ArticleComponent from '../strategyPageComment/ArtilcleComponent';
import UserTitleComponent from './UserTitleComponent';
import ComponentAbout from '../abouteComment/CommentAbout';
import '../css/comment.css'

class StrategyPage extends React.Component{

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
export default StrategyPage;