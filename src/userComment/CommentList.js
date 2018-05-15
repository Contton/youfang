'use strict'
import React from 'react';
import '../css/comment.css'
import $ from "jquery";

import { GET_COMMENT_BY_ARTICLEID, ADD_COMMENT } from "../API";

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {commentList:null};
    }

    componentWillReceiveProps(nextProps){
        this.getCommentListDate();
        window.scrollTo(0,0);
    }

    doWatch(){
        alert("关注成功")
    }

    getCommentListDate(){
        if(this.props.articleId != '' && this.props.articleId != null) {
            let url = GET_COMMENT_BY_ARTICLEID + this.props.articleId;
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: (data) => {
                    this.setState({commentList: data});
                },
                error: () => {
                    alert("请检查你的网络");
                }
            });
        }
    }

    renderComment(commentList){
        let list =  [];
        if(commentList != null) {
            for (let i = 0; i < commentList.length; i++) {
                list.push(
                    <div className="commentItem">
                        <div className="commentUser">
                            <div className="commentUserImg left"><img
                                src={commentList[i].userBaseInfo.headImageUrl}/>&nbsp;&nbsp;
                            </div>
                            <div className="commentUserNickName">{commentList[i].userBaseInfo.nickName}<span
                                className="doWatch" onClick={this.doWatch.bind(this)}>+关注</span></div>
                        </div>
                        <div className="commentText">{commentList[i].commentText}</div>
                        <div className="commentTime">{commentList[i].createTime}</div>
                    </div>
                );
            }
        }
        return list;

    }

    submitComment(){
        let inputText = this.refs.commentInputArea.value;
        this.refs.commentInputArea.value = "";
        if(inputText === ''){
            alert("评论不能为空！");
            return
        }
        let url = ADD_COMMENT;
        $.ajax({
            url:url,
            type:'post',
            data:{commentText:inputText,articleId:this.props.articleId},
            dataType:'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:(data)=>{
                if(data.code === '200'){
                    this.getCommentListDate();
                }else{
                    alert(data.data);
                }
            },
            error:()=>{
                alert("请检查你的网络");
            }
        });
    }


    render(){


        return(
                <div className="commentBox">
                    <div className="commentDiv">
                        <div className="commentTitle">评论列表</div>
                        <div className="commentList">
                            {this.renderComment(this.state.commentList)}
                        </div>
                        <div className="commentInput">
                            <textarea className="commentInputArea" ref="commentInputArea"/>
                        </div>
                        <div className="commentSubmit" onClick={this.submitComment.bind(this)}>提交</div>
                    </div>
                </div>
        );
    }
}

export default CommentList;