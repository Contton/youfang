import React, { Component } from 'react';
import $ from 'jquery';

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
            userInfo:userInfo,
            province:'',
            city:'',
        };
    }
    logout(){
        sessionStorage.removeItem("userInfo");
        this.setState({"userInfo":null});
    }
    showLogin(){
        if(this.state.userInfo == null || this.state.userInfo == '' || this.state.userInfo == undefined){
            return <Link to="/login"><div className="title1_login left">登录</div></Link>;
        }else if(this.state.userInfo != null){
            return (
                <div>
                    <Link to="/userCenter">
                        <div className="title1_login left">
                            <div className="headImg left" ><img src={this.state.userInfo.headImageUrl}/>&nbsp;&nbsp;</div>
                            {this.state.userInfo.nickName}
                        </div>
                    </Link>
                    <div className="title1_exit font_14 left color_grey" onClick={this.logout.bind(this)}>[退出]</div>
                </div>
            );
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
    componentDidMount(){
        this.getCity();
    }
    getCity(){
        $.getScript('http://ip.ws.126.net/ipquery', ()=>{
            this.setState({province:window.localAddress.province});
            this.setState({city:window.localAddress.city});
        });
    }
    render(){
        return(
            <div style={{float:"left",height:"50px",width:"100%"}}>
                <div className="title1_logo left">游方</div>
                <Link to="/home/index"><HerderSelect index="1" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} first={true}>
                    首页</HerderSelect></Link>
                <Link to="/home/hotStrategy"><HerderSelect index="3" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    热门攻略</HerderSelect></Link>
                <Link to="/home/hotTravel"><HerderSelect index="4" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                    热门游记</HerderSelect></Link>
                <div className="title1_location font_14 left">当前城市：<a>{this.state.city === '' ? this.state.province : this.state.city}</a></div>
                {this.showLogin()}
                {this.showRegister()}
            </div>
        );
    }
}

export default ComponentTitle;