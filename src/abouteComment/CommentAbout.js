'use strict'
import React from 'react';

class CommentAbout extends React.Component{
    render(){
        return(
            <div className="about_all left width color_grey">
                <div className="about_us height left">
                    <div className="us_title font_16 font_weight overflow">关于我们</div>
                    <div className="us_info overflow">游方简介</div>
                    <div className="us_info overflow">联系我们</div>
                    <div className="us_info overflow">合作伙伴</div>
                </div>
                <div className="about_us height left">
                    <div className="us_title font_16 font_weight overflow">加入游方</div>
                    <div className="us_info overflow">注册会员</div>
                </div>
                <div className="about_us height left">
                    <div className="us_title font_16 font_weight overflow">网站条款</div>
                    <div className="us_info overflow">会员条款</div>
                    <div className="us_info overflow">社区指南</div>
                    <div className="us_info overflow">版权声明</div>
                    <div className="us_info overflow">免费声明</div>
                </div>
                <div className="about_us height left">
                    <div className="us_title font_16 font_weight overflow">帮助中心</div>
                    <div className="us_info overflow">新手上路</div>
                    <div className="us_info overflow">使用帮助</div>
                    <div className="us_info overflow">网站地图</div>
                    <div className="us_info overflow">旅行工具</div>
                </div>
            </div>
        );
    }
}

export default CommentAbout;