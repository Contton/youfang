'use strict'
import React from 'react';
import $ from 'jquery';
import CommentList from '../userComment/CommentList';

import {GET_COMMENT_BY_ARTICLEID, ONE_TRAVEL_URL, TRAVEL_DO_PRAISE, USER_TRAVER, ADD_COMMENT, DO_WATCH} from "../API";
import BackTop from "../util/BackTop";
import {doGet} from "../util/getDataByAjax";

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
                    url: USER_TRAVER + id + '/1' + '/' + this.state.pageSize ,
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
        const url = ONE_TRAVEL_URL + id;
        $.get(url,function(res){
                this.setState({article:res});
                this.setState({article_id:res.traverArticleId});
                this.setState({author:res.author});
                this.setState({praiseCount:res.praiseCount});
                this.getOtherArticleByAuthorId(res.author.id);
            }.bind(this)
        )
    }

    addContent(){
        return(
            <div dangerouslySetInnerHTML={{__html: this.state.article.content}}/>
        );
    }

    addPraise(id){
        //http://localhost:8080/traverArticle/doPraise/1
        let url = TRAVEL_DO_PRAISE + id;
        $.get(url,(res)=>{
            if(res.code === '200'){
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
                    <div onClick={()=>{this.getArticle(articleList[i].traverArticleId)}} className="point page1_moreOne width left font_14">{articleList[i].title}</div>
                    <div className="createTimeSty width left font_12">{articleList[i].createTime}</div>
                </div>)
        }
        return list;
    }
    doWatch(id){
        doGet(DO_WATCH + id,()=>{
            alert("关注成功");
        },()=>{
            alert("关注失败");
        })
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
                            <div className="page1_connect right font_16" onClick={this.doWatch.bind(this,this.state.author.id)}>关注博主</div>
                            <div className="page1_intro left font_14">这个博主很懒，什么都没有留下......</div>
                            <div className="page1_like left font_14 color_grey">已有<span className="color_orange">2399</span>名粉丝</div>
                        </div>
                        <div className="page1_content left">
                            {this.addContent()}
                        </div>
                    </div>
                    <div className="page1_right">
                        <div onClick={this.addPraise.bind(this,this.state.article.traverArticleId)} className="page1_button page1_button_left color_white font_14 radius left background">点赞</div>
                        <div className="page1_button color_white font_12 radius left background">收藏</div>
                        <div onClick={this.goEnd.bind(this)} className="page1_button color_white font_12 radius left background">评论</div>
                        <div className="page1_more left">
                            <div className="page1_moreTitle width font_14">其他游记</div>
                            {this.renderAuthorArticle(this.state.articleList)}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <CommentList url={GET_COMMENT_BY_ARTICLEID} addurl={ADD_COMMENT} articleId={this.state.article_id}/>
            <BackTop/>
            </div>
        );
    }
}

export default ArtilcleComponent;