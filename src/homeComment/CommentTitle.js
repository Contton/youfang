import React, { Component } from 'react';
import img13 from '../images/13.jpg';

import HerderSelect from '../titleComment/ComponentTitle1Select';

import {Link } from 'react-router-dom';

class ComponentTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            login:'0',
        };
    }
    showLogin(){
        if(this.state.login === '0'){
            return <Link to="/login"><div className="title1_login left"><a href="#">登录</a></div></Link>;
        }else if(this.state.login === '2'){
            return <Link to="/8"><div className="title1_login left"><a href="#">个人中心</a></div></Link>;
        }
    }
    showRegister(){
        if(this.state.login === '0'){
            return <Link to="/register"><div className="title1_login title1_register left"><a href="#">注册</a></div></Link>;
        }else if(this.state.login === '2'){
            return null;
        }
    }
    changeClicked(index){
        this.setState({clicked:index});
    }
    changeMouserOver(index){
        this.setState({mouse_over:index});
    }
    render(){
        return(
            <div>
                <div className="title1_logo left"><img src={img13}/></div>
                <Link to="/home/index"><HerderSelect index="1" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} first={true}>
                    首页</HerderSelect></Link>
                <Link to="/home/2"><HerderSelect index="2" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    热门景点</HerderSelect></Link>
                <Link to="/home/3"><HerderSelect index="3" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    推荐</HerderSelect></Link>
                <Link to="/home/4"><HerderSelect index="4" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    旅游攻略</HerderSelect></Link>
                <Link to="/home/5"><HerderSelect index="5" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    游记</HerderSelect></Link>
                <Link to="/home/6"><HerderSelect index="6" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    写游记</HerderSelect></Link>
                {this.showLogin()}
                {this.showRegister()}
            </div>
        );
    }
}

export default ComponentTitle;