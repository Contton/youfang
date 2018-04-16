import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import CommentTitle from '../homeComment/CommentTitle';
import ComponentHome from '../homeComment/ComponentHome';
import ComponentAll from '../strategyComment/ComponentAll';
import ComponentLogin from '../loginComment/ComponentLogin';
import ComponentRegister from '../registerComment/ComponentRegister';
import ComponentStrategyPage from '../strategyPageComment/ComponentStrategyPage';
import ComponentWrite from '../writeComment/ComponentWrite';

class RouterInit extends Component{
    constructor(props){
        super(props);
        this.state = {
            mouse_over:'0',
            clicked:'1',
            login:'0',
        };
    }

    changeClicked(index){
        this.setState({clicked:index});
    }
    changeMouserOver(index){
        this.setState({mouse_over:index});
    }
    render(){

        /**
         *3个页面
         * 1.内容页面
         *  -组件-
         *  1.1 首页
         *  1.2 热门景点
         *  1.3 推荐
         *  1.4 旅游攻略
         *  1.5 游记
         * 2.登录
         * 3.注册
         */
        return(
            <div className="title1_all width font_16">
                <Router>
                    <div>
                        <Route exact>
                            <div>
                             <Route path="/home" component={CommentTitle}/>
                             <Route path="/home/index" component={ComponentHome}/>
                             <Route path="/home/4" component={ComponentAll}/>
                             <Route path="/home/5" component={ComponentStrategyPage}/>
                             <Route path="/home/6" component={ComponentWrite}/>
                             <Redirect path="/" to={{pathname: '/home/index'}} />
                            </div>
                        </Route>
                        <Route path="/login" component={ComponentLogin}/>
                        <Route path="/register" component={ComponentRegister}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default RouterInit;