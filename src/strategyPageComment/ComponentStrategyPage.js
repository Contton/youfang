'use strict'
import React from 'react';
import img1 from '../images/1.jpg';
import $ from 'jquery';

class ComponentStrategyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            article:'',
            author:''
        };
    }

    componentDidMount(){
        this.getHotArticle();
    }

    getHotArticle(){
        const url = 'http://localhost:8080/traverArticle/article/1';
        $.get(url,function(res){
                this.setState({article:res});
                this.setState({author:res.author});
        }.bind(this)
        )
    }

    addContent(){
        return(
            <div dangerouslySetInnerHTML={{__html: this.state.article.content}}/>
        );
    }

    render(){
        return(
            <div className="page1">
                <div className="page1_all">
                    <div className="page1_left left">
                        <div className="page1_title font_18">{this.state.article.title}</div>
                        <div className="page1_time font_14 color_grey right">赞&nbsp;<span>{this.state.article.praiseCount}</span></div>
                        <div className="page1_time font_14 color_grey right">{this.state.article.createTime}</div>
                        <div className="page1_time font_14 color_grey right">自由行攻略</div>
                        <div className="page1_writer radius left">
                            <div className="page1_head left"><img src={this.state.author.headImageUrl}/></div>
                            <div className="page1_name left font_16">{this.state.author.nickName}</div>
                            <div className="page1_connect right font_16">联系博主</div>
                            <div className="page1_intro left font_14">333</div>
                            <div className="page1_like left font_14 color_grey">已有<span className="color_orange">2399</span>名粉丝</div>
                        </div>
                        <div className="page1_content left">
                            {this.addContent()}
                        </div>
                    </div>
                    <div className="page1_right left">
                        <div className="page1_button color_white font_14 radius left background">点赞</div>
                        <div className="page1_button color_white font_14 radius left background">收藏</div>
                        <div className="page1_button color_white font_14 radius left background">评论</div>
                        <div className="page1_more left">
                            <div className="page1_moreTitle width font_16">该作者其他文章</div>
                            <a href="#" className="page1_moreOne width left color_orange font_14">其他文章1（夜游天安门广场欣赏夜灯的效果等）</a>
                            <a href="#" className="page1_moreOne width left color_orange font_14">其他文章2</a>
                            <a href="#" className="page1_moreOne width left color_orange font_14">其他文章3</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentStrategyPage;