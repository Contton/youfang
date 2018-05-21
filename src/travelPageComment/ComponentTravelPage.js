'use strict'
import React from 'react';
import ArticleComponent from './ArtilcleComponent';

class ComponentStrategyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            article:'',
            author:''
        };
    }
    render(){
        return(
            <div className="page1">
               <ArticleComponent articleId={this.props.match.params.id}/>
            </div>
        );
    }
}
export default ComponentStrategyPage;