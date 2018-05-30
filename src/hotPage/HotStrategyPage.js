'use strict'
import React from 'react';
import ComponentFind from "./ComponentFind";
import "../css/hot.css"
import StrategyList from "./StrategyList";
import {doGet, doPost} from '../util/getDataByAjax';
import {HOT_TRAVEL_URL, SEARCHSTRATEGY} from "../API";
import CommentAbout from "../abouteComment/CommentAbout";


class HotStrategyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            dataList:[]
        };
    }

    //搜索操作
    doSearch(value){
        doPost(SEARCHSTRATEGY,{value:value,StrategyPageNum:1},(data)=>{
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
                    <StrategyList push={this.props.history.push.bind(this)} dataList={this.state.dataList}/>
                </div>
                <CommentAbout/>
            </div>
        );
    }
}
export default HotStrategyPage;