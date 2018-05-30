import React from 'react';
import Aboute from '../abouteComment/CommentAbout';
import ResultComponent from './resultComponent';
import UserTitleComponent from '../userComment/UserTitleComponent';

class SearchResultPage extends React.Component{
    render(){
        return(
            <div>
                <UserTitleComponent push={this.props.history.push}/>
                <ResultComponent push={this.props.history.push} value = {this.props.match.params.value}/>
                <Aboute/>
            </div>
        );
    }
}

export default SearchResultPage;
