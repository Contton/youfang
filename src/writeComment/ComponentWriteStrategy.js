import React from 'react';
// 引入编辑器以及编辑器样式
import Edit from './Edit';
import $ from 'jquery';
import ComponentAboute from '../abouteComment/CommentAbout'
import 'braft-editor/dist/braft.css'

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            htmlContent:"",
            imgUrl:""
        };
    }
    renderImg(imgUrl){
        if(imgUrl == "") {
            return (<div style={{textAlign:'center',lineHeight:"140px"}}>封面</div>);
        }
        else{
            return (<img style={{width: '190px', height: '140px',}} src={imgUrl}/>);
        }
    }
    getHtmlContext = (htmlContent)=>{

    }
    handleUploadImgAction(){

    }
    handleImageUpload(){

    }
    render () {
        return (
            <div>
                <div className="write left" style={{width:"100%", backgroundColor:"#ebebeb"}}>
                    <div className="write_div">
                        <input ref="title" className="write_title radius font_14" type="text" placeholder="请在此处填写题目"/>
                        <input ref="dist" className="write_title radius font_14" type="text" placeholder="请在此处填写目的地"/>
                        <input className="write_title radius font_14" type="text" placeholder="请在此处填写所需费用"/>
                        <input className="write_title radius font_14" type="text" placeholder="请在此处填写所需时间"/>
                        <input className="write_title radius font_14" type="text" placeholder="请在此处填写交通路线"/>
                        <textarea  ref="introduction" className="write_intro radius font_14" placeholder="请在此处填写简介"/>
                        <div style={{backgroundColor:'white',width:'190px',height:'140px',border:'1px solid #D6D6D6',float:'left',marginBottom:'20px'}}>
                            {this.renderImg(this.state.imgUrl)}
                        </div>
                        <input ref="inputFile" style={{float:'right',opacity:'0'}} name="file" type='file' onChange={this.handleImageUpload.bind(this)}/>
                        <div onClick={this.handleUploadImgAction.bind(this)} style={{cursor:'pointer',textAlign:'center',color:'white',borderRadius:'3px',lineHeight:'30px',float:'left',height:'30px',width:'80px',marginLeft:'20px',backgroundColor:'#FF9E00'}}>添加封面</div>
                        <div className="write_content width radius left ">
                            <div  style={{backgroundColor:"#fff"}}>
                                <Edit getHtmlContext={this.getHtmlContext}/>
                            </div>
                        </div>
                        <div className="write_button radius right background" onClick={this.handleSubmit}>提交</div>
                    </div>
                </div>
                <ComponentAboute/>
            </div>
        )
    }
}
export default CommentBox;