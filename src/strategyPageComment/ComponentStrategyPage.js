'use strict'
import React from 'react';
import ArticleComponent from './ArtilcleComponent';

class ComponentStrategyPage extends React.Component{

    constructor(props){
        super(props);
        alert(this.props.match.params.id);
        this.state = {
            article:'',
            author:''
        };
    }

    componentDidMount(){
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