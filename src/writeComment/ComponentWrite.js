import React from 'react';
// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class CommentBox extends React.Component {
    render () {
        const editorProps = {
            height: 500,
            contentFormat: 'html',
            initialContent: '<p>请在此处填写游记内容</p>',
            onChange: this.handleChange,
            onRawChange: this.handleRawChange
        }
        return (
            <div className="write">
                <input className="write_title radius font_18" type="text" placeholder="请在此处填写题目"/>
                <input className="write_title radius font_18" type="text" placeholder="请在此处填写目的地"/>
                <textarea className="write_intro radius font_18" placeholder="请在此处填写简介"></textarea>
                <div className="write_content width">
                    <div className="demo">
                        <BraftEditor {...editorProps}/>
                    </div>
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
}
export default CommentBox;