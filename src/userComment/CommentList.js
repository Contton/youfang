'use strict'
import React from 'react';
import '../css/comment.css'
import $ from "jquery";

class CommentList extends React.Component{
    GET_COMMENT_BY_ARTICLEID = "http://localhost:8080/comments/";
    ADD_COMMENT = "http://localhost:8080/addComment";

    constructor(props){
        super(props);
        this.state = {commentList:[]};
    }

    componentDidMount(){
        this.getCommentListDate();
    }

    doWatch(){
        alert("关注成功")
    }

    getCommentListDate(){
        let url = this.GET_COMMENT_BY_ARTICLEID + this.props.articleId;
        $.ajax({
            url:url,
            type:'get',
            dataType:'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:(data)=>{
               this.setState({commentList:data});
            },
            error:()=>{
                alert("请检查你的网络");
            }
        });
    }

    renderComment(commentList){
        let list =  [];
        for(let i = 0;i < commentList.length;i++) {
            list.push(
                <div className="commentItem">
                    <div className="commentUser">
                        <div className="commentUserImg left"><img
                            src={commentList[i].userBaseInfo.headImageUrl}/>&nbsp;&nbsp;
                        </div>
                        <div className="commentUserNickName">{commentList[i].userBaseInfo.nickName}<span className="doWatch" onClick={this.doWatch.bind(this)}>+关注</span></div>
                    </div>
                    <div className="commentText">{commentList[i].commentText}</div>
                    <div className="commentTime">{commentList[i].createTime}</div>
                </div>
            );
        }
        return list;

    }

    submitComment(){
        let inputText = this.refs.commentInputArea.value;
        if(inputText === ''){
            alert("评论不能为空！");
            return
        }
        let url = this.ADD_COMMENT;
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
                        <div className="commentLine"/>
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