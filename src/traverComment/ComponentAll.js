import React from 'react';
import Aboute from '../abouteComment/CommentAbout';
import ComponentTraver from './ComponentTraver';
import ComponentTitle from '../userComment/UserTitleComponent';

class ComponentAll extends React.Component{
    render(){
        return(
            <div>
                <ComponentTitle push={this.props.history.push}/>
                <ComponentTraver push={this.props.history.push} userId = {this.props.match.params.id}/>
                <Aboute/>
            </div>
        );
    }
}

export default ComponentAll;
