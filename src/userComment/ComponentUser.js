import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import img1 from '../images/1.jpg';
import classNames from 'classnames';

class ComponentUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unchang:'修改个人简介',
            changed:'保存',
            change:false,
            fans:0,
            focus:0,
            fans_number:34,
            focus_number:55,
        };
    }
    dealDiscribe(){
        this.setState({change : !this.state.change});
    }
    dealFansOver(index, event){
        if(index === 1){
            this.setState({fans: 1});
        }else if(index === 2){
            this.setState({focus: 1});
        }
    }
    dealFansOut(index, event){
        if(index === 1){
            this.setState({fans: 0});
        }else if(index === 2){
            this.setState({focus: 0});
        }
    }
    render(){
        let discribeShow = classNames({
            user_discribe: true,
            display_show: true,
        });
        let discribeHidden = classNames({
            user_discribe: true,
            display_show: false,
        });
        return(
            <div className="user">
                <div className="user_all">
                    <div className="user_left left">
                        <div className="user_info">
                            <img src={img1}/>
                            <div className="user_name font_20">佟丽娅</div>
                            <div onClick={this.dealDiscribe.bind(this)} className="user_change color_grey">{this.state.change === false ? this.state.unchang : this.state.changed}</div>
                            <input type="text" className={this.state.change === false ? discribeHidden : discribeShow}></input>
                            <div onMouseOver={this.dealFansOver.bind(this, 1)} onMouseOut={this.dealFansOut.bind(this, 1)} className="user_fans left">{this.state.fans === 0 ? '粉丝' : this.state.fans_number}</div>
                            <div onMouseOver={this.dealFansOver.bind(this, 2)} onMouseOut={this.dealFansOut.bind(this, 2)} className="user_fans left">{this.state.focus === 0 ? '关注' : this.state.focus_number}</div>
                        </div>
                    </div>
                    <div className="user_right right">
                        <Router>
                            <div className="width">
                                <div className="user_nav width left">
                                    <Link to="/home/userCenter/information"><div className="left user_choose height">我的资料</div></Link>
                                    <Link to="/home/userCenter/travel"><div className="left user_choose height">我的游记</div></Link>
                                    <Link to="/home/userCenter/strategy"><div className="left user_choose height">我的攻略</div></Link>
                                </div>
                                <Route exact path="/home/userCenter/information" component={ComponentUserInfor}/>
                                <Route exact path="/home/userCenter/travel" component={ComponentTravel}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

class ComponentUserInfor extends React.Component{
    render(){
        return(
            <div className="userInfo_all width">
                <div className="userInfo_title width font_20">修改个人资料</div>
                <span className="userInfo_space">用户昵称：&nbsp;&nbsp;</span><input type="text" className="userInfo_one"></input>
                <div className="userInfo_sex width"><span className="userInfo_space">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：&nbsp;&nbsp;</span>
                    <input className="userInfo_man" type="radio" name="sex" value="man"/>男
                    <input className="userInfo_man" type="radio" name="sex" value="woman"/>女
                    <input className="userInfo_man" type="radio" name="sex" value="undifened"/>不明
                </div>
                <span className="userInfo_space">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：&nbsp;&nbsp;&nbsp;</span><input className="userInfo_one" type="date"/><br/>
                <span className="userInfo_space">现居住地：&nbsp;&nbsp;</span><input className="userInfo_one" type="text"/><br/>
                <span className="userInfo_space">曾居住地：&nbsp;&nbsp;</span><input className="userInfo_one" type="text"/><br/>
                <span className="userInfo_space">个性签名：&nbsp;&nbsp;</span><input className="userInfo_one userInfo_dis" type="text" placeholder="不得超过55个字"/>
                <input type="button" className="userInfo_ok radius color_white font_16" value="确认修改"/>
            </div>
        );
    }
}

class ComponentTravel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            travel_count:30,
            travel_answer:549,
            travel_read:1035,
        };
    }
    render(){
        return(
            <div className="userInfo_all width">
                <div className="userTravel_title">
                    <div className="userTravel_count right">
                        回复：<span>{this.state.travel_answer}</span>
                    </div>
                    <div className="userTravel_count right">
                        阅读：<span>{this.state.travel_read}</span>
                    </div>
                    <div className="userTravel_count right">
                        游记：<span>{this.state.travel_count}</span>
                    </div>
                </div>
                <div className="width">
                    <div className="userTravel_one radius">
                        <div className="font_20 color_orange">
                            走进安娜普尔纳的遗世天堂
                        </div>
                        <div className="userTravel_article">
                            即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。
                        </div>
                        <div className="userTravel_time userTravel_article right">2018-4-2</div>
                        <div className="userTravel_read userTravel_article right">阅读：<span>223</span></div>
                    </div>
                    <div className="userTravel_one radius">
                        <div className="font_20 color_orange">
                            走进安娜普尔纳的遗世天堂
                        </div>
                        <div className="userTravel_article">
                            即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。
                        </div>
                        <div className="userTravel_time userTravel_article right">2018-4-2</div>
                        <div className="userTravel_read userTravel_article right">阅读：<span>223</span></div>
                    </div><div className="userTravel_one radius">
                    <div className="font_20 color_orange">
                        走进安娜普尔纳的遗世天堂
                    </div>
                    <div className="userTravel_article">
                        即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。
                    </div>
                    <div className="userTravel_time userTravel_article right">2018-4-2</div>
                    <div className="userTravel_read userTravel_article right">阅读：<span>223</span></div>
                </div><div className="userTravel_one radius">
                    <div className="font_20 color_orange">
                        走进安娜普尔纳的遗世天堂
                    </div>
                    <div className="userTravel_article">
                        即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。
                    </div>
                    <div className="userTravel_time userTravel_article right">2018-4-2</div>
                    <div className="userTravel_read userTravel_article right">阅读：<span>223</span></div>
                </div>
                </div>
            </div>
        );
    }
}

export default ComponentUser;