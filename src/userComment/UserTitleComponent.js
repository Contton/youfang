import React from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

class UserTitleComponent extends React.Component{
    constructor(props){
        super(props);
        let u = sessionStorage.getItem("userInfo");
        let userInfo = null;
        if(u != null){
            userInfo = JSON.parse(u);
        }
        this.state = {
            userInfo:userInfo,
        };
    }

    logout(){
        sessionStorage.removeItem("userInfo");
        this.setState({"userInfo":null});
        this.props.push("/home/index");
    }

    renderHeaderCenter(userInfo){
        if(userInfo == null){
            return(<div className="headerCenter">
                <Link className="TopTitleCommonFont" to="/login">
                    <span className="headerCenter_Font">登录</span>
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link className="TopTitleCommonFont" to="/register">
                    <span className="headerCenter_Font">注册</span>
                </Link>
            </div>);
        }else {
            return (
                <div className="headerCenter">
                    <Link className="TopTitleCommonFont" to="/userCenter">
                        <div className="headImg left"><img src={userInfo.headImageUrl}/>&nbsp;&nbsp;</div>
                        <span className="headerCenter_Font left">{userInfo.nickName}</span>
                    </Link>
                    <div className="title1_exit font_14 left color_white" onClick={this.logout.bind(this)}>[退出]</div>
                </div>);
        }
    }

    renderTitleWrite(){
        if(this.state.userInfo != null){
            let headerSelectStyle = classNames({
                TopTitleCommon:true,
                left:true,
            });
            return(
                <div>
                    <div className={headerSelectStyle}>
                        <Link className="TopTitleCommonFont" to="/blackTitle/writeTravel">写游记</Link>
                    </div>
                    <div className={headerSelectStyle}>
                    <Link className="TopTitleCommonFont" to="/blackTitle/writeStrategy">写攻略</Link>
                    </div>
                </div>
            );
        }
    }

    render(){

        let headerSelectStyle = classNames({
            TopTitleCommon:true,
            left:true,
        });
        return(
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
                            {this.renderTitleWrite()}
                            {this.renderHeaderCenter(this.state.userInfo)}
                        </div>
                    </div>
                </div>
        );
    }
}

export default UserTitleComponent;