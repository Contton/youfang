'use strict'
import React from 'react';
import img1 from '../images/1.jpg';

class ComponentStrategyPage extends React.Component{
    render(){
        return(
            <div className="page1">
                <div className="page1_all">
                    <div className="page1_left left">
                        <div className="page1_title">稻城亚丁怎么去？四季景色有何不同？这篇攻略全告诉你</div>
                        <div className="page1_time font_16 color_grey right">阅读&nbsp;<span>2333</span></div>
                        <div className="page1_time font_16 color_grey right">2017-06-02</div>
                        <div className="page1_time font_16 color_grey right">自由行攻略</div>
                        <div className="page1_writer radius left">
                            <div className="page1_head left"><img src={img1}/></div>
                            <div className="page1_name left font_20">佟丽娅</div>
                            <div className="page1_connect right font_18">联系博主</div>
                            <div className="page1_intro left">佟丽娅，1984年8月8日出生于新疆伊犁，踏实、诚恳的演好每一个角色。</div>
                            <div className="page1_like left">已有<span className="color_orange">2399</span>名粉丝</div>
                        </div>
                        <div className="page1_content left">
                            <div className="page1_synopsis width">稻城亚丁风景区地处四川省稻城县香格里拉镇亚丁村，在这片被誉为“最后的香格里拉”的土地上，能够看到雪山、冰川、峡谷、森林与湖泊，能够看到没被世俗沾染的美妙风景，还能够欣赏到独特的人文风情。最奇妙的是，不同季节看到的风景也不尽相同，别有趣味。</div>
                        </div>
                    </div>
                    <div className="page1_right left">
                        <div className="page1_button color_white font18 radius left background">点赞</div>
                        <div className="page1_button color_white font18 radius left background">收藏</div>
                        <div className="page1_button color_white font18 radius left background">评论</div>
                        <div className="page1_more left">
                            <div className="page1_moreTitle width font_18">该作者其他文章</div>
                            <a href="#" className="page1_moreOne width left color_orange">其他文章1（夜游天安门广场欣赏夜灯的效果等）</a>
                            <a href="#" className="page1_moreOne width left color_orange">其他文章2</a>
                            <a href="#" className="page1_moreOne width left color_orange">其他文章3</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentStrategyPage;