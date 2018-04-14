import React, { Component } from 'react';
import img13 from '../images/13.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HerderSelect from './ComponentTitle1Select';
import ComponentHome from '../homeComment/ComponentHome';
import ComponentRegister from '../registerComment/ComponentRegister';
import ComponentLogin from '../loginComment/ComponentLogin';
import ComponentAll from '../strategyComment/ComponentAll';

class ComponentTitle1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            login:'0',
        };
    }
    dealLogin(){
        if(this.state.login === '0'){
            return <Link to="/6"><HerderSelect index="6"
                                               changeMouserOver={this.changeMouserOver.bind(this)}
                                               changeClicked={this.changeClicked.bind(this)}
                                               selected={this.state.clicked} mouse_over={this.state.mouse_over}
                                               left={true}>登录</HerderSelect></Link>;
        }else if(this.state.login === '1'){
            return <Link to="/8"><HerderSelect index="8"
                                               changeMouserOver={this.changeMouserOver.bind(this)}
                                               changeClicked={this.changeClicked.bind(this)}
                                               selected={this.state.clicked} mouse_over={this.state.mouse_over}
                                               left={true} end={true}>个人中心</HerderSelect></Link>;
        }
    }
    dealRegister(){
        if(this.state.login === '0') {
            return <Link to="/7"><HerderSelect index="7" changeMouserOver={this.changeMouserOver.bind(this)}
                                               changeClicked={this.changeClicked.bind(this)}
                                               selected={this.state.clicked} mouse_over={this.state.mouse_over}
                                               left={true} end={true}>注册</HerderSelect></Link>;
        }else if(this.state.login === '1'){
            return null;
        }
    }
    changeClicked(index){
        this.setState({clicked:index});
    }
    changeMouserOver(index){
        this.setState({mouse_over:index});
    }
    render(){
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
                        {this.dealLogin()}
                        {this.dealRegister()}
                        <Route path="/1" component={ComponentHome}/>
                        <Route path="/4" component={ComponentAll}/>
                        <Route path="/6" component={ComponentLogin}/>
                        <Route path="/7" component={ComponentRegister}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default ComponentTitle1;