import React, { Component } from 'react';

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            htmlContent:''
        };
    }

    uploadFn = (param) => {
            const serverURL = 'http://localhost:8080/upload';
            const xhr = new XMLHttpRequest;
            const fd = new FormData();
            // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
            console.log(param.libraryId);

            const successFn = (response) => {
                // 假设服务端直接返回文件上传后的地址
                // 上传成功后调用param.success并传入上传后的文件地址
                param.success({
                    url: xhr.responseText,
                    meta: {
                        //id: 'xxx',
                        //title: 'xxx',
                        //alt: 'xxx',
                        //loop: true, // 指定音视频是否循环播放
                        autoPlay: true, // 指定音视频是否自动播放
                        controls: true, // 指定音视频是否显示控制栏
                        //poster: 'http://xxx/xx.png', // 指定视频播放器的封面
                    }
                })
            }

        const progressFn = (event) => {
            // 上传进度发生变化时调用param.progress
            param.progress(event.loaded / event.total * 100)
        }

        const errorFn = (response) => {
            // 上传发生错误时调用param.error
            param.error({
                msg: 'unable to upload.'
            })
        }

        //添加相关监听方法
        xhr.upload.addEventListener("progress", progressFn, false);
        xhr.addEventListener("load", successFn, false);
        xhr.addEventListener("error", errorFn, false);
        xhr.addEventListener("abort", errorFn, false);

        fd.append('file', param.file);
        xhr.open('POST', serverURL, true);
        xhr.send(fd)
    }

    render () {
        const editorProps = {
            height: 500,
            contentFormat: 'raw',
            initialContent: '<p>Hello World!</p>',
            onHTMLChange : this.handleHtmlChange,
            image: true, // 开启图片插入功能
            fontFamilies:[
                {
                    name: 'Araial',
                    family: 'Arial, Helvetica, sans-serif'
                }, {
                    name: 'Georgia',
                    family: 'Georgia, serif'
                }, {
                    name: 'Impact',
                    family: 'Impact, serif'
                }, {
                    name: 'Monospace',
                    family: '"Courier New", Courier, monospace'
                }, {
                    name: 'Tahoma',
                    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
                },{
                    name: '微软雅黑',
                    family: "微软雅黑"
                }
            ],
            media:{
                allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
                image: true, // 开启图片插入功能
                video: true, // 开启视频插入功能
                audio: true, // 开启音频插入功能
                validateFn: null, // 指定本地校验函数，说明见下文
                uploadFn: this.uploadFn, // 指定上传函数，说明见下文
                removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
                onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
                onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
                onInsert: null, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
            }
        }

        return (
            <div>
                <div style={{margin:"0 auto"}}>
                    <BraftEditor {...editorProps}/>
                </div>
            </div>
        )
    }


    handleChange = (content) => {
        console.log(content)
    }

    handleRawChange = (rawContent) => {
        console.log(rawContent)
    }
    handleHtmlChange = (htmlContent)=>{
        console.log(htmlContent)
        this.setState({htmlContent:htmlContent});
        this.props.getHtmlContext(htmlContent);
    }
}


export default Edit;