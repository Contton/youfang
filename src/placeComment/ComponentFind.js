import React, { Component } from 'react';

class ComponentFind extends React.Component{
    render(){
        return(
            <div className="find">
                <input type="text" className="find_input left radius font_16" placeholder="搜索目的地"/>
                <input type="button" className="find_button left radius font_16 background color_white" value="搜索"/>
            </div>
        );
    }
}
export default ComponentFind;