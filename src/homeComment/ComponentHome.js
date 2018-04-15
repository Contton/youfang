import React, { Component } from 'react';
import ComponentPicture from './ComponentPicture';
import ComponentContent from './CommentContent';
import ComponentAboute from '../abouteComment/CommentAbout';

import HerderSelect from '../titleComment/ComponentTitle1Select';

import {Link } from 'react-router-dom';

class ComponentHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            login:'0',
        };
    }
    showLogin(){
        if(this.state.login === '0'){
            return <Link to="/login"><div className="title1_login left"><a href="#">登录</a></div></Link>;
        }else if(this.state.login === '2'){
            return <Link to="/8"><div className="title1_login left">个人中心</div></Link>;
        }
    }
    showRegister(){
        if(this.state.login === '0'){
            return <Link to="/register"><div className="title1_login title1_register left"><a href="#">注册</a></div></Link>;
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
        return(
                <div className="route_all">
                    <ComponentPicture/>
                    <ComponentContent/>
                    <ComponentAboute/>
                </div>
        );
    }
}

export default ComponentHome;