import React from 'react';
import $ from "jquery";
import {USER_TRAVER} from "../API";

class ComponentTraver extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            travel_count:30,
            travel_answer:549,
            travel_read:1035,
            data:[],
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

    getArticle = (pageNum)=>{
        $.ajax({
                ///user/{id}/{pageNum}/{pageSize}
                url: USER_TRAVER + this.props.userId + '/' + pageNum + '/' + this.state.pageSize ,
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
                    this.setState({data:data.list});
                    this.setState({total:data.total});
                    this.setState({navigatepageNums:data.navigatepageNums});
                },
                error:()=>{
                    alert("请检查你的网络");
                    //跳转到首页
                }
            }
        );
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

    componentDidMount(){
        this.getArticle(this.state.pageNum);
    }

    renderUser(){
        if(this.state.data != null && this.state.data.length > 0){
            return(
                <div>
                    <div className="user_info_div">
                        <div className="user_info_img">
                            <img src={this.state.data[0].author.headImageUrl}/>
                        </div>
                        <div className="user_info_nickname">
                            {this.state.data[0].author.nickName}
                        </div>
                        <div className="user_info_intro">
                            新疆大学教师，乌鲁木齐登山探险协会会员，新疆观鸟协会会员；酷爱登山、徒步、地理探险、摄影和写作；十数年来，其足迹遍布新疆维吾尔自治区境内之天山、昆仑山、阿尔金山、阿尔泰山、东帕米尔高原及塔里木、准噶尔盆地等地
                        </div>
                    </div>
                </div>
            );
        }
    }

    render(){
        let pageStyle = {
            fontSize:"12px",cursor:'pointer',marginRight:'10px',borderRadius:"2px", border:"1px solid #FF9D00",color:"white",backgroundColor:"#FF9D00",paddingTop:"3px",paddingBottom:'3px',paddingLeft:'8px',paddingRight:'8px',float:'left',
        }

        let pageText = {
            fontSize:"12px",marginRight:'10px',color:"#FF9D00",paddingTop:"3px",paddingBottom:'3px',paddingLeft:'8px',paddingRight:'8px',float:'left',
        }

        return(
            <div className="traver">
                <div className="traver_all">
                    <div className="traver_left left">
                    <div className="traver_travel width">
                        <div style={{fontSize:'18px'}}>游记列表</div>
                        <div className="width">
                            {this.renderArticle(this.state.data)}
                        </div>
                        <div className="width" style={{marginTop:'30px',paddingBottom:'50px',marginLeft:'200px'}}>
                            <div style={pageStyle} onClick={this.prePage}>上一页</div>
                            {this.renderNavigatepageNums(this.state.navigatepageNums)}
                            <div style={pageStyle} onClick={this.nextPage}>下一页</div>
                            <div style={pageText}>共计:{this.state.total}</div>
                        </div>
                    </div>
                </div>
                {this.renderUser()}
                </div>
            </div>
        );
    }
}

export default ComponentTraver;