import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import head from '../images/head.jpg';
import classNames from 'classnames';
import headerImg from  '../images/headerImg.jpeg'

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
        let headerSelectStyle = classNames({
            TopTitleCommon:true,
            left:true,
        });
        return(
            <div className="user_com">
                <div className="TopTitle_com">
                    <div className="TopTitle_com_div">
                        <div className="TopTitle">
                            <div className={headerSelectStyle}>
                                游方
                            </div>
                            <div className={headerSelectStyle}>
                                <Link className="TopTitleCommonFont" to="/home/index">首页</Link>
                            </div>
                            <div className={headerSelectStyle}>
                                <Link className="TopTitleCommonFont" to="/home/index">组队</Link>
                            </div>
                            <div className={headerSelectStyle}>
                                <Link className="TopTitleCommonFont" to="/home/index">问答</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="user">
                    <div className="user_all">
                        <div className="user_left left">
                            <div className="user_info left">
                                <img src={head}/>
                                <div className="user_name font_16">佟丽娅</div>
                                <div onClick={this.dealDiscribe.bind(this)} className="user_change font_14">{this.state.change === false ? this.state.unchang : this.state.changed}</div>
                                <input type="text" className={this.state.change === false ? discribeHidden : discribeShow}/>
                                <div onMouseOver={this.dealFansOver.bind(this, 1)} onMouseOut={this.dealFansOut.bind(this, 1)} className="user_fans left font_14 fans_border_right">{this.state.fans === 0 ? '粉丝' : this.state.fans_number}</div>
                                <div onMouseOver={this.dealFansOver.bind(this, 2)} onMouseOut={this.dealFansOut.bind(this, 2)} className="user_fans left font_14">{this.state.focus === 0 ? '关注' : this.state.focus_number}</div>
                            </div>
                        </div>
                        <div className="user_right right">
                            <Router>
                                <div className="width">
                                    <div className="user_nav width left">
                                        <Link to="/userCenter/information"><div className="left user_choose height font_14">我的资料</div></Link>
                                        <Link to="/userCenter/travel"><div className="left user_choose height font_14">我的游记</div></Link>
                                        <Link to="/userCenter/strategy"><div className="left user_choose height font_14">我的攻略</div></Link>
                                        <Link to="/userCenter/collection"><div className="left user_choose height font_14">我的收藏</div></Link>
                                        <Link to="/userCenter/fans"><div className="left user_choose height font_14">我的粉丝</div></Link>
                                        <Link to="/userCenter/follow"><div className="left user_choose height font_14">我的关注</div></Link>
                                    </div>
                                    <Route path="/userCenter/information" component={ComponentUserInfor}/>
                                    <Route exact path="/userCenter/travel" component={ComponentTravel}/>
                                    <Route path="/userCenter/fans" component={ComponentFans}/>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ComponentFans extends React.Component{
    render(){
        return(
            <div className="userInfo_all width">
                <div className="userFans_one left radius">
                    <img src={img1}/>
                    <div className="font_16 width userFans_name">佟丽娅</div>
                    <div className="userFans_travel userFans_left left font_14 color_grey">
                        <div className="userFans_number font_weight">34</div>
                        <div className="userFans_number">游记</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">12</div>
                        <div className="userFans_number">攻略</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">344434</div>
                        <div className="userFans_number">粉丝</div>
                    </div>
                    <input className="userFans_button radius font_14 left" type="button" value="已关注"/>
                    <input className="userFans_button radius font_14 left background userFans_margin" type="button" value="发私信"/>
                </div>
                <div className="userFans_one radius left">
                    <img src={img1}/>
                    <div className="font_16 width userFans_name">佟丽娅</div>
                    <div className="userFans_travel userFans_left left font_14 color_grey">
                        <div className="userFans_number font_weight">34</div>
                        <div className="userFans_number">游记</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">12</div>
                        <div className="userFans_number">攻略</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">344434</div>
                        <div className="userFans_number">粉丝</div>
                    </div>
                    <input className="userFans_button radius font_14 left" type="button" value="已关注"/>
                    <input className="userFans_button radius font_14 left background userFans_margin" type="button" value="发私信"/>
                </div>
                <div className="userFans_one radius left">
                    <img src={img1}/>
                    <div className="font_16 width userFans_name">佟丽娅</div>
                    <div className="userFans_travel userFans_left left font_14 color_grey">
                        <div className="userFans_number font_weight">34</div>
                        <div className="userFans_number">游记</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">12</div>
                        <div className="userFans_number">攻略</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">344434</div>
                        <div className="userFans_number">粉丝</div>
                    </div>
                    <input className="userFans_button radius font_14 left" type="button" value="已关注"/>
                    <input className="userFans_button radius font_14 left background userFans_margin" type="button" value="发私信"/>
                </div>
                <div className="userFans_one radius left">
                    <img src={img1}/>
                    <div className="font_16 width userFans_name">佟丽娅</div>
                    <div className="userFans_travel userFans_left left font_14 color_grey">
                        <div className="userFans_number font_weight">34</div>
                        <div className="userFans_number">游记</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">12</div>
                        <div className="userFans_number">攻略</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">344434</div>
                        <div className="userFans_number">粉丝</div>
                    </div>
                    <input className="userFans_button radius font_14 left" type="button" value="已关注"/>
                    <input className="userFans_button radius font_14 left background userFans_margin" type="button" value="发私信"/>
                </div>
                <div className="userFans_one radius left">
                    <img src={img1}/>
                    <div className="font_16 width userFans_name">佟丽娅</div>
                    <div className="userFans_travel userFans_left left font_14 color_grey">
                        <div className="userFans_number font_weight">34</div>
                        <div className="userFans_number">游记</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">12</div>
                        <div className="userFans_number">攻略</div>
                    </div>
                    <div className="userFans_travel userFans_border left font_14 color_grey">
                        <div className="userFans_number font_weight">344434</div>
                        <div className="userFans_number">粉丝</div>
                    </div>
                    <input className="userFans_button radius font_14 left" type="button" value="已关注"/>
                    <input className="userFans_button radius font_14 left background userFans_margin" type="button" value="发私信"/>
                </div>
            </div>
        );
    }
}

class ComponentUserInfor extends React.Component{
    render(){
        return(
            <div className="userInfo_all width">
                <div className="userInfo_title width font_16">修改个人资料</div>
                <span className="userInfo_space font_14">用户昵称：&nbsp;&nbsp;</span><input type="text" className="userInfo_one font_14"></input><br/>
                <span className="userInfo_space font_14">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="tel"/><br/>
                <span className="userInfo_space font_14">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="email"/><br/>
                <span className="userInfo_space font_14">就读学校：&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="text"/>
                <div className="userInfo_sex width font_14"><span className="userInfo_space">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：&nbsp;&nbsp;</span>
                    <input className="userInfo_man" type="radio" name="sex" value="man"/>男
                    <input className="userInfo_man" type="radio" name="sex" value="woman"/>女
                </div>
                <span className="userInfo_space font_14">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：&nbsp;&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="date"/><br/>
                <span className="userInfo_space font_14">现居住地：&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="text"/><br/>
                <span className="userInfo_space font_14">曾居住地：&nbsp;&nbsp;</span><input className="userInfo_one font_14" type="text"/><br/>
                <span className="userInfo_space font_14">个性签名：&nbsp;&nbsp;</span><input className="userInfo_one font_14 userInfo_dis" type="text" placeholder="不得超过55个字"/>
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
                <div className="userTravel_title font_16">
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
                        <img src={img2}/>
                        <div className="left color_orange font_16">走进安娜普尔纳的遗世天堂</div>
                        <div className="userTravel_content left font_14 color_grey">即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。</div>
                        <div className="font_14 userTravel_time color_grey right">2018-4-2</div>
                        <div className="font_14 color_grey right">阅读：<span>223</span></div>
                    </div>
                    <div className="userTravel_one radius">
                        <img src={img2}/>
                        <div className="left color_orange font_16">走进安娜普尔纳的遗世天堂</div>
                        <div className="userTravel_content left font_14 color_grey">即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。</div>
                        <div className="font_14 userTravel_time color_grey right">2018-4-2</div>
                        <div className="font_14 color_grey right">阅读：<span>223</span></div>
                    </div>
                    <div className="userTravel_one radius">
                        <img src={img2}/>
                        <div className="left color_orange font_16">走进安娜普尔纳的遗世天堂</div>
                        <div className="userTravel_content left font_14 color_grey">即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。</div>
                        <div className="font_14 userTravel_time color_grey right">2018-4-2</div>
                        <div className="font_14 color_grey right">阅读：<span>223</span></div>
                    </div>
                    <div className="userTravel_one radius">
                        <img src={img2}/>
                        <div className="left color_orange font_16">走进安娜普尔纳的遗世天堂</div>
                        <div className="userTravel_content left font_14 color_grey">即使转眼过去许久，面对着上海连绵刺骨的阴雨冬天，我依然会无比怀念在Annapurna群山之中的探险岁月，所有一切至今仿佛都历历在目，令人越发珍惜。</div>
                        <div className="font_14 userTravel_time color_grey right">2018-4-2</div>
                        <div className="font_14 color_grey right">阅读：<span>223</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentUser;