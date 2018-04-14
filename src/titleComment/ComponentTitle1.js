import React, { Component } from 'react';
import img13 from '../images/13.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HerderSelect from './ComponentTitle1Select';
import ComponentHome from '../homeComment/ComponentHome';
import ComponentAll from '../strategyComment/ComponentAll';
import classNames from 'classnames/bind';

import styles from '../css/title1Css.css';

let style = classNames.bind(styles);

class ComponentTitle1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            login:'0',
        };
    }
    showCenter(){
        if(this.state.login === '0'){
            return <div className="title1_login left"><a href="#" onClick={this.dealLogin.bind(this, '1')}>登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">注册</a></div>;
        }else if(this.state.login === '2'){
            return <Link to="/8"><HerderSelect index="8"
                                               changeMouserOver={this.changeMouserOver.bind(this)}
                                               changeClicked={this.changeClicked.bind(this)}
                                               selected={this.state.clicked} mouse_over={this.state.mouse_over}
                                               left={true} end={true}>个人中心</HerderSelect></Link>;
        }
    }
    dealLogin(state, event){
        this.setState({login:state});
    }
    changeClicked(index){
        this.setState({clicked:index});
    }
    changeMouserOver(index){
        this.setState({mouse_over:index});
    }
    render(){
        let backShow = style({
            title1_back:true,
            login_show:true,
        })
        let backHidden = style({
            title1_back:false,
            login_show:false,
        })
        let loginShow = style({
            login_box:true,
            login_show:true,
        })
        let loginHidden = style({
            login_box:false,
            login_show:false,
        })
        return(
            <div className="title1_all width font_16">
                <div className="title1_logo left"><img src={img13}/></div>
                <Router>
                    <div>
                        <Link to="/1"><HerderSelect index="1" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} first={true}>
                            首页</HerderSelect></Link>
                        <Link to="/2"><HerderSelect index="2" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            热门景点</HerderSelect></Link>
                        <Link to="/3"><HerderSelect index="3" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            推荐</HerderSelect></Link>
                        <Link to="/4"><HerderSelect index="4" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            旅游攻略</HerderSelect></Link>
                        <Link to="/5"><HerderSelect index="5" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            游记</HerderSelect></Link>
                        {this.showCenter()}
                        <div className={this.state.login === '1' ? backShow : backHidden}></div>
                        <div className={this.state.login === '1' ? loginShow : loginHidden}>
                            <form>
                                <input type="text" className="login_phone login_total" placeholder="请输入你的手机号"/>
                                <input type="password" className="login_check login_total" placeholder="请输入你的密码"/>
                                <br/>
                                <a href="#" className="login_forget">忘记密码？</a>
                                <button className="login_ok radius" onClick={this.dealLogin.bind(this, '0')}>关闭</button>
                                <button className="login_ok radius background">登录</button>
                            </form>
                        </div>
                        <Route exact path="/1" component={ComponentHome}/>
                        <Route path="/4" component={ComponentAll}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default ComponentTitle1;