'use strict'
import React from 'react'
import ComponentTitle1 from '../titleComment/ComponentTitle1';

class CommentBox extends React.Component{
    render(){
        return(
            <div className="width">
                <ComponentTitle1/>
            </div>
        );
    }
}

export default CommentBox;