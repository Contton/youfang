import React from 'react';

import Edit from './Edit';
import $ from 'jquery';

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
        return(<img src={imgUrl}/>);
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
                //title=test&introduction=test&coverImageUrl=http://localhost/ss.jsp&content=<p>测试</p>
                url:'http://localhost:8080/traverArticle/addTraverArticle',
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

    render () {
        return (
            <div>
                <div style={{borderBottom:"1px solid #D6D6D6",width:'100%',float:"left",boxShadow:'4px 0px 4px #F0F0F0'}}/>
                <div className="write">
                    <div className="write_div">
                        <input ref="title" className="write_title radius font_14" type="text" placeholder="请在此处填写题目"/>
                        <input ref="dist" className="write_title radius font_14" type="text" placeholder="请在此处填写目的地"/>
                        <textarea  ref="introduction" className="write_intro radius font_14" placeholder="请在此处填写简介"/>
                        <input name="file" type='file' onChange={this.handleImageUpload.bind(this)}/>
                        {this.renderImg(this.state.imgUrl)}
                        <div className="write_content width radius">
                            <div>
                                <Edit getHtmlContext={this.getHtmlContext}/>
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
                                marginBottom:'100px'}} onClick={this.handleSubmit}>提交</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentBox;