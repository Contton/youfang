import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import img1 from '../images/1.jpg';

class ComponentUser extends React.Component{
    render(){
        return(
            <div className="user">
                <div className="user_all">
                    <div className="user_left left">
                        <div className="user_info">
                            <img src={img1}/>
                            <div className="user_name font_20">佟丽娅</div>
                            <div className="user_change color_grey">修改个人简介</div>
                        </div>
                    </div>
                    <div className="user_right right">
                        <Router>
                            <div className="user_part width">
                                <div className="user_nav width left">
                                    <Link to="/home/userCenter/info"><div className="left user_choose height">我的资料</div></Link>
                                    <Link to="/home/userCenter/info"><div className="left user_choose height">我的游记</div></Link>
                                    <Link to="/home/userCenter/info"><div className="left user_choose height">我的攻略</div></Link>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentUser;