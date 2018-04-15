'use strict'
import React from 'react';
import img1 from '../images/1.jpg';

class ComponentStrategyPage extends React.Component{
    render(){
        return(
            <div className="page1">
                <div className="page1_all">
                    <div className="page1_left left">
                        <div className="page1_title">尘烟滚滚 风沙走石 ，风里雨里 多彩生机--19天纳米比亚4*4、南非自驾</div>
                        <div className="page1_time font_16 color_grey right">阅读&nbsp;<span>2333</span></div>
                        <div className="page1_time font_16 color_grey right">2017-06-02</div>
                        <div className="page1_time font_16 color_grey right">自由行攻略</div>
                        <div className="page1_writer left">
                            <div className="page1_head left"><img src={img1}/></div>
                            <div className="page1_name left font_20">佟丽娅</div>
                            <div className="page1_connect right font_18">联系博主</div>
                            <div className="page1_intro left">佟丽娅，1984年8月8日出生于新疆伊犁，踏实、诚恳的演好每一个角色。</div>
                        </div>
                    </div>
                    <div className="page1_right left">
                        <div className="page1_button color_white font18 radius left background">点赞</div>
                        <div className="page1_button color_white font18 radius left background">收藏</div>
                        <div className="page1_button color_white font18 radius left background">评论</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentStrategyPage;