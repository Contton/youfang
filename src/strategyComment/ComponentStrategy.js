'use strict'
import React from 'react';
import $ from 'jquery';

class OneContent extends React.Component{
    listPicture(){
        var pictureList = this.props.list.picture;
        var pictures = [];
        for (var i = 0; i < pictureList.length; i++) {
            pictures.push(<img src={pictureList[i]}/>);
        }
        return pictures;
    }
    render(){
        return(
            <div className="list_one width radius">
                <div className="list_title color_orange font_weight font18 overflow">【{this.props.list.title}】</div>
                <div className="list_content color_grey overflow">{this.props.list.content}</div>
                <div className="list_picture overflow">{this.listPicture()}</div>
                <div className="list_time color_grey overflow">{this.props.list.time}</div>
            </div>
        );
    }
}

class CommentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contenUrl:"http://localhost:3000/list.json",
            list:[],
        };
    }
    componentWillMount(){
        this.getList();
    }
    getList(){
        $.ajax({
            url: this.state.contenUrl,
            async: false,
            success: (comments) => {
                this.setState({list:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    render(){
        return(
            <div className="list">
                <div className="list_all">
                    <OneContent list={this.state.list[0]}/>
                    <OneContent list={this.state.list[1]}/>
                    <OneContent list={this.state.list[2]}/>
                    <OneContent list={this.state.list[3]}/>
                    <OneContent list={this.state.list[4]}/>
                    <div className="list_page">
                        <input type="button" className="page_button radius height left" value="<<首页"/>
                        <input type="button" className="page_button radius height left" value="<上一页"/>
                        <div className="page_number height left">第<span>1</span>页(共<span>4</span>页)</div>
                        <input type="button" className="page_button radius height left" value="下一页>"/>
                        <input type="button" className="page_button radius height left" value="尾页>>"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;