import React from 'react';
import $ from "jquery";
import {SEARCH, USER_TRAVER} from "../API";

class StrategyList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            reslist:[],
            pageNum:1,
            pageSize:4,
            total:0,
            navigatepageNums:[],
            userInfo:null,
        };
    }

    renderNavigatepageNums(data){
        let pageStyle = {
            fontSize:"12px",cursor:'pointer',marginRight:'10px',borderRadius:"2px", border:"1px solid #FF9D00",color:"white",backgroundColor:"#FF9D00",paddingTop:"3px",paddingBottom:'3px',paddingLeft:'8px',paddingRight:'8px',float:'left',
        };
        let list = [];
        if(data != null) {
            for (let i = 0; i < data.length; i++) {
                list.push(
                    <div style={pageStyle} onClick={this.turnPage.bind(this,data[i])}>{data[i]}</div>
                );
            }
        }
        return list;
    }

    renderArticle = (data)=>{
        let list = [];
        if(data != null) {
            for (let i = 0; i < data.length; i++) {
                let id = '/ArticlePage/' + data[i].traverArticleId;
                list.push(
                    <div className="userTravel_list radius" onClick={()=>{this.props.push(id)}}>
                        <img src={data[i].coverImageUrl}/>
                        <div className="left color_orange font_16">{data[i].title}</div>
                        <div className="userTravel_content left font_14 color_grey">{data[i].introduction}</div>
                        <div className="font_14 userTravel_time color_grey right">{data[i].createTime}</div>
                        <div className="font_14 color_grey right">赞：<span>{data[i].praiseCount}</span></div>
                    </div>);
            }
        }
        return list;
    }

    nextPage = ()=>{
        this.setState({pageNum:this.state.pageNum + 1},()=>{
            this.getArticle(this.state.pageNum);
        });

    };

    prePage = ()=>{
        this.setState({pageNum:this.state.pageNum - 1},()=>{
            this.getArticle(this.state.pageNum);
        });
    };

    turnPage(now){
        this.setState({pageNum:now},()=>{
            this.getArticle(this.state.pageNum);
        });
    };

    renderPage(){
        let pageStyle = {
            fontSize:"12px",cursor:'pointer',marginRight:'10px',
            borderRadius:"2px", border:"1px solid #FF9D00",color:"white",
            backgroundColor:"#FF9D00",paddingTop:"3px",paddingBottom:'3px',
            paddingLeft:'8px',paddingRight:'8px',float:'left',
        };
        let pageText = {
            fontSize:"12px",marginRight:'10px',color:"#FF9D00",
            paddingTop:"3px",paddingBottom:'3px',paddingLeft:'8px',
            paddingRight:'8px',float:'left',
        };

        if(this.props.dataList.navigatepageNums != null){
            return (
            <div className="width" style={{marginTop:'30px',paddingBottom:'50px',marginLeft:'200px'}}>
                <div style={pageStyle} onClick={this.prePage}>上一页</div>
                {this.renderNavigatepageNums(this.props.dataList.navigatepageNums)}
                <div style={pageStyle} onClick={this.nextPage}>下一页</div>
                <div style={pageText}>共计:{this.props.dataList.total}</div>
            </div>
            );
        }
    }

    componentDidMount(){
        //this.getArticle();
    }



    render(){

        return(
            <div className="traver">
                <div className="traver_all">
                    <div className="traver_left left">
                        <div className="traver_travel width">
                            <div style={{fontSize:'18px'}}>游记列表</div>
                            <div className="width">
                                {this.renderArticle(this.props.dataList.reslist)}
                            </div>
                            {this.renderPage()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default StrategyList;