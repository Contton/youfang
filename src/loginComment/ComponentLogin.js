'use strict'
import React from 'react';
import $ from 'jquery';
import {LOGIN_URL} from '../API';

class ComponentLogin extends React.Component{
    userInfo = {"id":1,
            "nickName":"lixin_f",
            "phoneNumber":"15091675497",
            "email":"lx224466@163.com",
            "password":"",
            "headImageUrl":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514772015,3464222502&fm=27&gp=0.jpg"
            };

    addUserInfoToSessionStorage(userInfo){
        console.log(JSON.stringify(userInfo));
        //设置UserInfo
        sessionStorage.setItem("userInfo",JSON.stringify(userInfo));
    }
    doLogin(){
        var phoneNumber = this.refs.input_phoneNum.value;
        var password = this.refs.input_password.value;
        //验证用户
        $.ajax({
            url:LOGIN_URL,
            data:{"phoneNumber":phoneNumber,"password":password},
            type:'post',
            dataType:'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:(data)=>{
                console.log(data);
                if(data.code == '200') {
                    //通过验证
                    //设置用户信息到SessionStorage
                    this.addUserInfoToSessionStorage(data.data);
                    //跳转到首页
                    this.props.history.push('/home/index');
                }else{
                    alert("密码错误");
                }
            },
            error:()=>{
                alert("请检查你的网络");
                this.addUserInfoToSessionStorage(this.userInfo);
                //跳转到首页
                this.props.history.push('/home/index');
            }
        });
    }
    backHome(){
        this.props.history.push('/home/index');
    }
    render(){
        return(
            <div className="login_all">
                <div className="login_info radius left">
                    <div className="login_title font_20">登录</div>
                        <input ref="input_phoneNum" type="text" className="login_phone login_total" placeholder="请输入你的手机号"/>
                        <input ref="input_password" type="password" className="login_check login_total" placeholder="请输入你的密码"/>
                        <br/>
                        <a>忘记密码？</a>
                        <button className="login_get login_total" onClick={this.backHome.bind(this)}>返回</button>
                        <button className="login_get login_total" onClick={this.doLogin.bind(this)}>登录</button>
                </div>
            </div>
        );
    }
}

export default ComponentLogin;