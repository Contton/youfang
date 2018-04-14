import React, { Component } from 'react';
import classNames from 'classnames';

class HerderSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {mouseOut:false};
    }

    render(){
        let clickFlag = this.props.index == this.props.selected ? true : false;
        let overFlag = this.props.index == this.props.mouse_over ? true : false;

        let headerSelectStyle = classNames({
            headerFirst:this.props.first,
            headerEnd:this.props.end,
            headerCommon:true,
            right:this.props.right,
            left:this.props.left,
            onclickStyle:clickFlag,
            overStyle: !clickFlag && overFlag && !this.state.mouseOut,
            outStyle: !clickFlag && this.state.mouseOut
        });

        return (
            <div className={headerSelectStyle}
                 onClick={this.props.changeClicked.bind(this,this.props.index)}
                 onMouseOver={()=>{this.props.changeMouserOver(this.props.index);this.setState({mouseOut:false})}}
                 onMouseOut={()=>{this.setState({mouseOut:true})}}>
                {this.props.children}
            </div>
        );
    }
}

export default HerderSelect;