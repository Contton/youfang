'use strict'
import React from 'react';
import {doPost,doGet} from '../util/getDataByAjax';
import {SENDMESSAGE_URL,REGIST_URL} from '../API';

class ComponentRegister extends React.Component{
    sendMessage(){
        var phoneNumber = this.refs.phoneNumber.value;
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phoneNumber))){
            alert("请输入正确的手机号！");
        }else{
            let pn = this.refs.phoneNumber.value;
            let url = SENDMESSAGE_URL + pn;
            doGet(url,(data)=>{
                if(data.code == '200'){
                    alert('发送成功');
                }else{
                    alert('发送失败');
                }
            },()=>{
                alert("请检查你的网络");
            });
        }
    }
    checkInfo(){
        let phoneNumber = this.refs.phoneNumber.value;
        let one_pass = this.refs.one_pass.value;
        let two_pass = this.refs.two_pass.value;
        let check = this.refs.check.value;
        if(one_pass !== two_pass){
            alert("两次密码不相等，请检查！");
        }else{
            let res = {
                phoneNumber:phoneNumber,
                password:one_pass,
                obj:check,
            }
            doPost(REGIST_URL,res,(data)=>{
                if(data.code==200){
                    alert('注册成功');
                    this.props.history.push("/home/index");
                }else{
                    alert('注册失败');
                }
            },()=>{
                alert("请检查你的网络");
            });
        }
    }
    returnHome(){
        this.props.history.push("/home/index");
    }
    render(){
        return(
            <div className="register">
                <div className="register_info radius left">
                    <div className="register_title font_20">注册</div>
                    <form>
                        <input ref="phoneNumber" type="text" className="register_phone register_total" placeholder="请输入你的手机号"/>
                        <button  onClick={this.sendMessage.bind(this)} type="button" className="register_get register_total register_width">获取验证码</button>
                        <input ref="check" type="text" className="register_check register_total" placeholder="请输入你的验证码"/>
                        <input ref="one_pass" type="password" className="register_check register_total" placeholder="请输入你的密码"/>
                        <input ref="two_pass" type="password" className="register_check register_total" placeholder="请确认你的密码"/>
                        <button type="button" onClick={this.returnHome.bind(this)} className="register_get register_total">返回</button>
                        <button type="button" className="register_get register_total" onClick={this.checkInfo.bind(this)}>注册</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ComponentRegister;