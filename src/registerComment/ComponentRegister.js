'use strict'
import React from 'react';
import {doPost} from '../util/getDataByAjax';
import {SENDMESSAGE_URL} from '../API';

class ComponentRegister extends React.Component{

    sendMessage(){
        let pn = this.refs.phoneNumber.value;
        let url = SENDMESSAGE_URL + pn;
        doPost(url,(data)=>{
            alert(data.code);
            if(data.code==200){
                alert('发送成功');
            }else{
                alert('发送失败');
            }
        },()=>{
            alert("请检查你的网络");
        });
    }

    render(){
        return(
            <div className="register">
                <div className="register_info radius left">
                    <div className="register_title font_20">注册</div>
                    <form>
                        <input ref="phoneNumber" type="text" className="register_phone register_total" placeholder="请输入你的手机号"/>
                        <button type="button" onClick={this.sendMessage.bind(this)} className="register_get register_total register_width">获取验证码</button>
                        <input type="text" className="register_check register_total" placeholder="请输入你的验证码"/>
                        <input type="password" className="register_check register_total" placeholder="请输入你的密码"/>
                        <input type="password" className="register_check register_total" placeholder="请确认你的密码"/>
                        <button className="register_get register_total">返回</button>
                        <button className="register_get register_total">注册</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ComponentRegister;