'use strict'
import React from 'react';
import {doGet, doPost} from "../util/getDataByAjax";
import {HOT_TRAVEL_URL, SEARCHTRAVER} from "../API";
import ComponentFind from "./ComponentFind";
import TraverList from "./TraverList";
import CommentAbout from "../abouteComment/CommentAbout";

class HotTraverPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            dataList:{}
        };
    }

    //搜索操作
    doSearch(value){
        doPost(SEARCHTRAVER,{value:value,traverPageNum:1},(data)=>{
            let dataList = {
                reslist:data.list,
                total:data.total,
                navigatepageNums:data.navigatepageNums
            };
            this.setState({dataList:dataList});
        },()=>{});

    }
    //初始化数据
    initData(){
        doGet(HOT_TRAVEL_URL,(data)=>{
            let dataList = {
                reslist:data,
                navigatepageNums:null,
                total:data.total,
            };
            this.setState({dataList:dataList});
        },()=>{});
    }

    //初始化数据
    componentDidMount(){
        this.initData();
    }

    render(){
        return(
            <div className="hotPageBody">
                <div className="hotDiv">
                    <div className="Line"/>
                    <ComponentFind doAction={this.doSearch.bind(this)}/>
                    <div className="shortLine"/>
                    <TraverList push={this.props.history.push.bind(this)} dataList={this.state.dataList}/>
                </div>
                <CommentAbout/>
            </div>
        );
    }
}
export default HotTraverPage;