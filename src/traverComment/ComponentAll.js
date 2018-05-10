import React from 'react';
import Aboute from '../abouteComment/CommentAbout';
import ComponentTraver from './ComponentTraver';
import ComponentTitle from '../userComment/UserTitleComponent';

class ComponentAll extends React.Component{
    render(){
        return(
            <div>
                <ComponentTitle/>
                <ComponentTraver/>
                <Aboute/>
            </div>
        );
    }
}

export default ComponentAll;
