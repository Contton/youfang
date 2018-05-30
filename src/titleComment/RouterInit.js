import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import CommentTitle from './CommentTitle';
import ComponentHome from '../homeComment/ComponentHome';
import ComponentStrategyPage from '../strategyPageComment/ComponentStrategyPage';
import ComponentLogin from '../loginComment/ComponentLogin';
import ComponentRegister from '../registerComment/ComponentRegister';
import ComponentTravelPage from '../travelPageComment/ComponentTravelPage';
import ComponentWriteTravel from '../writeComment/ComponentWriteTravel';
import ComponentWriteStrategy from '../writeComment/ComponentWriteStrategy';
import ComponentPlace from '../placeComment/ComponentAll';
import ComponentUser from '../userComment/ComponentAll';
import UserShowComment from '../UserShowComment/ComponentAll';
import UserTitleComponent from '../userComment/UserTitleComponent';
import ArticlePage  from '../userComment/ArticlePage';
import StrategyPage from '../userComment/StrategyPage'
import SearchResultPage from "../SearchResultPage/SearchResultPage";
import HotStrategyPage from "../hotPage/HotStrategyPage";
import HotTraverPage from "../hotPage/HotTraverPage";

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
                        <Route>
                            <div>
                             <Route path="/home" component={CommentTitle}/>
                             <Route path="/home/index" component={ComponentHome}/>
                             <Route path="/home/hotPlace" component={ComponentPlace}/>
                             <Route path="/home/hotStrategy" component={HotStrategyPage}/>
                             <Route path="/home/hotTravel" component={HotTraverPage}/>
                            </div>
                        </Route>
                        <Route path="/userCenter" component={ComponentUser}/>
                        <Route path="/search/:value" component={SearchResultPage}/>
                        <Route path="/login" component={ComponentLogin}/>
                        <Route path="/register" component={ComponentRegister}/>
                        <Route path="/ArticlePage/:id" component={ArticlePage}/>
                        <Route path="/StrategyPage/:id" component={StrategyPage}/>
                        <Route path="/userShow/:id" component={UserShowComment}/>
                        <Route path="/blackTitle" component={UserTitleComponent}/>
                        <Route path="/blackTitle/writeStrategy" component={ComponentWriteStrategy}/>
                        <Route path="/blackTitle/writeTravel" component={ComponentWriteTravel}/>
                        <Redirect path="/" exact={true} to="/home/index" />
                    </div>
                </Router>
            </div>
        );
    }
}

export default RouterInit;