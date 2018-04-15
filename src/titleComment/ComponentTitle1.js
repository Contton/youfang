import React, { Component } from 'react';
import img13 from '../images/13.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HerderSelect from './ComponentTitle1Select';
import ComponentHome from '../homeComment/ComponentHome';
import ComponentAll from '../strategyComment/ComponentAll';
import ComponentLogin from '../loginComment/ComponentLogin';
import ComponentRegister from '../registerComment/ComponentRegister';
import ComponentStrategyPage from '../strategyPageComment/ComponentStrategyPage';
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
    showLogin(){
        if(this.state.login === '0'){
            return <Link to="/6"><div className="title1_login left"><a href="#">登录</a></div></Link>;
        }else if(this.state.login === '2'){
            return <Link to="/8"><div className="title1_login left">个人中心</div></Link>;
        }
    }
    showRegister(){
        if(this.state.login === '0'){
            return <Link to="/7"><div className="title1_login title1_register left"><a href="#">注册</a></div></Link>;
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
                        <Link to="/"><HerderSelect index="1" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true} first={true}>
                            首页</HerderSelect></Link>
                        <Link to="/2"><HerderSelect index="2" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            热门景点</HerderSelect></Link>
                        <Link to="/3"><HerderSelect index="3" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            推荐</HerderSelect></Link>
                        <Link to="/4"><HerderSelect index="4" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            旅游攻略</HerderSelect></Link>
                        <Link to="/5"><HerderSelect index="5" changeMouserOver={this.changeMouserOver.bind(this)} changeClicked={this.changeClicked.bind(this)} selected={this.state.clicked} mouse_over={this.state.mouse_over} left={true}>
                            游记</HerderSelect></Link>
                        {this.showLogin()}
                        {this.showRegister()}
                        <Route exact path="/" component={ComponentHome}/>
                        <Route path="/4" component={ComponentAll}/>
                        <Route path="/6" component={ComponentLogin}/>
                        <Route path="/7" component={ComponentRegister}/>
                        <Route path="/5" component={ComponentStrategyPage}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default ComponentTitle1;