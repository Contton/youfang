'use strict'
import React from 'react';
import $ from 'jquery';
import CommentList from '../userComment/CommentList';

import {ONE_STRATEGY, STRATEGY_DO_PRAISE, ADD_STRATEGY_COMMENT, USER_STRATEGY, GET_STRATEGY_COMMENT_BY_ARTICLEID} from "../API";
import BackTop from "../util/BackTop";
class ArtilcleComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            article:'',
            article_id: '',
            author:'',
            praiseCount:0,
            pageSize:5,
            articleList:[]
        };
    }
    componentDidMount(){
        this.getArticle(this.props.articleId);
    }
    //获取作者同类型文章
        getOtherArticleByAuthorId = (id)=>{
            $.ajax({
                    ///user/{id}/{pageNum}/{pageSize}
                    url: USER_STRATEGY + id + '/1',
                    type:'get',
                    dataType:'json',
                    async: false,
                    xhrFields: {    //携带cookies
                        withCredentials: true
                    },
                    crossDomain: true,
                    success:(data)=>{
                        console.log(data);
                        //跳转到首页
                        this.setState({articleList:data.list});
                    },
                    error:()=>{
                        alert("请检查你的网络");
                        //跳转到首页
                    }
                }
            );
        }
    getArticle(id){
        const url = ONE_STRATEGY + id;
        $.get(url,function(res){
                this.setState({article:res});
                this.setState({article_id:res.id});
                this.setState({author:res.author});
                this.setState({praiseCount:res.praiseCount});
                this.getOtherArticleByAuthorId(res.author.id);
            }.bind(this)
        )
    }
    addContent(){
        return(
            <div>
                <div className="page1_space width left font_20 color_orange">所需花费</div>
                <div className="page1_space page1_bottom width left font_14">{this.state.article.costMoney}</div>
                <div className="page1_space width left font_20 color_orange">所需时间</div>
                <div className="page1_space page1_bottom width left font_14">{this.state.article.costTime}</div>
                <div className="page1_space width left font_20 color_orange">交通路线</div>
                <div className="page1_space page1_bottom width left font_14">{this.state.article.trafficRoutes}</div>
                <div className="page1_content left">
                    <div dangerouslySetInnerHTML={{__html: this.state.article.content}}/>
                </div>
            </div>
        );
    }
    addPraise(id){
        //http://localhost:8080/traverArticle/doPraise/1
        let url = STRATEGY_DO_PRAISE + id;
        $.get(url,(res)=>{
            if(res.code == 200){
                this.setState({praiseCount:this.state.praiseCount+1});
            }
        })
    }
    goEnd(){
        const e = document.documentElement.scrollHeight || document.body.scrollHeight;
        setTimeout(function() {
            window.scrollTo(0,e-890);
        }, 100);
    }
    renderAuthorArticle(articleList){
        let list = [];
        for(let i = 0;i < articleList.length;i++){
            list.push(
                <div className="more_div">
                    <div onClick={()=>{this.getArticle(articleList[i].id)}} className="point page1_moreOne width left font_14">{articleList[i].title}</div>
                    <div className="createTimeSty width left font_12">{articleList[i].createTime}</div>
                </div>)
        }
        return list;
    }
    render(){
        return(
            <div>
            <div className="articlePage">
            <div className="page1">
                <div className="page1_all">
                    <div className="page1_left left">
                        <div className="page1_title font_18">{this.state.article.title}</div>
                        <div className="page1_time font_14 color_grey right">赞&nbsp;<span>{this.state.praiseCount}</span></div>
                        <div className="page1_time font_14 color_grey right">{this.state.article.createTime}</div>
                        <div className="page1_time font_14 color_grey right">自由行攻略</div>
                        <div className="page1_writer radius left">
                            <div className="page1_head left"><img src={this.state.author.headImageUrl}/></div>
                            <div className="page1_name left font_16">{this.state.author.nickName}</div>
                            <div className="page1_connect right font_16">联系博主</div>
                            <div className="page1_intro left font_14">333</div>
                            <div className="page1_like left font_14 color_grey">已有<span className="color_orange">2399</span>名粉丝</div>
                        </div>
                        {this.addContent()}
                    </div>
                    <div className="page1_right">
                        <div onClick={this.addPraise.bind(this,this.state.article.id)} className="page1_button page1_button_left color_white font_14 radius left background">点赞</div>
                        <div className="page1_button color_white font_12 radius left background">收藏</div>
                        <div onClick={this.goEnd.bind(this)} className="page1_button color_white font_12 radius left background">评论</div>
                        <div className="page1_more left">
                            <div className="page1_moreTitle width font_14">其他攻略</div>
                            {this.renderAuthorArticle(this.state.articleList)}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <CommentList url={GET_STRATEGY_COMMENT_BY_ARTICLEID} addurl={ADD_STRATEGY_COMMENT} articleId={this.state.article_id}/>
            <BackTop/>
            </div>
        );
    }
}

export default ArtilcleComponent;