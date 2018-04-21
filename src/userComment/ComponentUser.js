import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import img1 from '../images/1.jpg';
import classNames from 'classnames';

class ComponentUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unchang:'请填写个人简介',
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
                            <div className="user_part width">
                                <div className="user_nav width left">
                                    <Link to="/home/userCenter/information"><div className="left user_choose height">我的资料</div></Link>
                                    <Link to="/home/userCenter/travel"><div className="left user_choose height">我的游记</div></Link>
                                    <Link to="/home/userCenter/strategy"><div className="left user_choose height">我的攻略</div></Link>
                                </div>
                                <Route exact path="/home/userCenter/information" component={ComponentUserInfor}/>
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
            <div className="userInfo_all">
                wode ziliao
            </div>
        );
    }
}

export default ComponentUser;