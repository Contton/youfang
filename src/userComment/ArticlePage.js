'use strict'
import React from 'react';
import ArticleComponent from '../strategyPageComment/ArtilcleComponent';

class Articlepage extends React.Component{

    constructor(props){
        super(props);
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

export default Articlepage;