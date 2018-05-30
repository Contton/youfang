import React, { Component } from 'react';

class ComponentFind extends React.Component{

    doClick(){
        let data = this.refs.inv.value;
        this.props.doAction(data);
    }

    render(){
        return(
            <div className="find">
                <input ref="inv" type="text" className="find_input left radius font_16" placeholder="填写关键字"/>
                <input  onClick={this.doClick.bind(this)} type="button" className="find_button left radius font_16 background color_white" value="搜索"/>
            </div>
        );
    }
}
export default ComponentFind;