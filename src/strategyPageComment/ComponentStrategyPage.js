'use strict'
import React from 'react';
import $ from 'jquery';
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

    getHotArticle(){
        const url = 'http://localhost:8080/traverArticle/article/' + this.props.param.id;
        $.get(url,function(res){
                this.setState({article:res});
                this.setState({author:res.author});
        }.bind(this)
        )
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