'use strict'
import React from 'react';

class ComponentLogin extends React.Component{
    render(){
        return(
            <div className="login">
                <div className="login_info radius left">
                    <div className="login_title font_20">登录</div>
                    <form>
                        <input type="text" className="login_phone login_total" placeholder="请输入你的手机号"/>
                        <input type="password" className="login_check login_total" placeholder="请输入你的密码"/>
                        <br/>
                        <a href="#" className="login_forget">忘记密码？</a>
                        <button className="login_ok radius background">登录</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ComponentLogin;