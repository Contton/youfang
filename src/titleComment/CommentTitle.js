import React, { Component } from 'react';
import headerImg from  '../images/headerImg.jpeg'

import HerderSelect from './ComponentTitle1Select';

import {Link } from 'react-router-dom';

class ComponentTitle extends Component{
    constructor(props){
        super(props);
        /**
         *从SessionStorage中获取用户信息
         * 如果用户为空，则显示登录、注册
         * 否则显示用户名称
         */
        let u = sessionStorage.getItem("userInfo");
        if(u != null){
            var userInfo = JSON.parse(u);
        }
        this.state = {
            mouse_over:'0',
            clicked:'1',
            userInfo:userInfo
        };
    }
    showLogin(){
        if(this.state.userInfo == null || this.state.userInfo == '' || this.state.userInfo == undefined){
            return <Link to="/login"><div className="title1_login left">登录</div></Link>;
        }else if(this.state.userInfo != null){
            return (
                <Link to="/home/userCenter">
                    <div className="title1_login left">
                        <div className="headImg left" ><img src={headerImg}/>&nbsp;&nbsp;</div>
                        {this.state.userInfo.nickName}
                    </div>
                </Link>);
        }
    }
    showRegister(){
        if(this.state.userInfo == null || this.state.userInfo == '' || this.state.userInfo == undefined){
            return <Link to="/register"><div className="title1_login title1_register left"><a href="#">注册</a></div></Link>;
        }else if(this.state.userInfo != null){
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
                <div className="title1_logo left">游方</div>
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