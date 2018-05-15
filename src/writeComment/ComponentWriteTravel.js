import React from 'react';

import Edit from './Edit';
import $ from 'jquery';
import ComponentAboute from '../abouteComment/CommentAbout'
import { WRITE_TRAVER } from "../API";

class CommentBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            htmlContent:"",
            imgUrl:""
        };
    }

    textInputChange(){
        alert(this.refs.title.value);
        alert(this.refs.dist.value);
        alert(this.refs.introduction.value);
        alert(this.state.htmlContent);
    }

    getHtmlContext = (htmlContent)=>{
        this.setState({htmlContent:htmlContent});
    }

    renderImg(imgUrl){
        if(imgUrl == "") {
            return (<div style={{textAlign:'center',lineHeight:"140px"}}>封面</div>);
        }
        else{
            return (<img style={{width: '190px', height: '140px',}} src={imgUrl}/>);
        }
    }

    handleImageUpload(e){
        e.preventDefault();
        let data = e.target;

        const serverURL = 'http://localhost:8080/upload';
        const xhr = new XMLHttpRequest;
        const fd = new FormData();

        const successFn = () => {
            this.setState({imgUrl:xhr.responseText});

        }
        xhr.addEventListener("load", successFn, false);
        fd.append('file', data.files[0]);
        xhr.open('POST', serverURL, true);
        xhr.send(fd)
    }

    handleSubmit = ()=>{
        this.textInputChange();
        $.ajax({
                url: WRITE_TRAVER,
                data:{"title":this.refs.title.value,
                    "introduction":this.refs.introduction.value,
                    "coverImageUrl":this.state.imgUrl,
                    "content":this.state.htmlContent},
                type:'post',
                dataType:'json',
                xhrFields: {    //携带cookies
                    withCredentials: true
                },
                crossDomain: true,
                success:(data)=>{
                    console.log(data);
                    if(data.code == '200') {
                        //跳转到首页
                        this.props.history.push('/userCenter');
                    }else{
                        alert("密码错误");
                    }
                },
                error:()=>{
                    alert("请检查你的网络");
                    //跳转到首页
                    this.props.history.push('/home/index');
                }
            }
        );
    }

    handleUploadImgAction(){
        this.refs.inputFile.click();
    }

    render () {
        return (
            <div>
                <div className="write left" style={{width:"100%", backgroundColor:"#ebebeb"}}>
                    <div className="write_div">
                        <input ref="title" className="write_title radius font_14" type="text" placeholder="请在此处填写题目"/>

                        <input ref="dist" className="write_title radius font_14" type="text" placeholder="请在此处填写目的地"/>
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
                        <div style={{
                            float:'right',
                            lineHeight:'30px',
                            width:'80px',
                            height:'30px',
                            borderRadius:'5px',
                            fontFamily:'微软雅黑',
                            color:'#fff',
                            backgroundColor:'#FF9E00',
                            cursor:'pointer',
                            paddingLeft:'50px',
                            marginTop:'50px',
                            marginBottom:'100px'
                        }} onClick={this.handleSubmit}>提交</div>
                    </div>
                </div>
                <ComponentAboute/>
            </div>
        )
    }
}
export default CommentBox;