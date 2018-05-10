import React from 'react';
import img1 from '../images/1.jpg';
import img17 from '../images/17.jpg';

class ComponentTraver extends React.Component{
    render(){
        return(
            <div className="traver">
                <div className="traver_all">
                    <div className="traver_left left">
                        <div className="traver_travel width">
                            <div className="width font_18">没想到，你是这样的阿育吠陀</div>
                            <img className="traver_img left" src={img17}/>
                            <div className="traver_content left font_14 color_grey">岛上的治安很好。在肯尼亚的其他城市，我绝不敢拿着相机在街上招摇过市。但在拉穆岛，我却成天都背着相机，贪婪地猎取着从日出到日落的景观。拉穆岛历史悠久，很早就被列入世界遗产，据说郑和的船队就曾途经此地。岛上曾有繁荣的象牙和奴隶贸易。不过如今它却</div>
                            <div className="traver_traver left font_14 color_orange">佟丽娅</div>
                            <div className="traver_time left font_14 color_grey">2018.3.4</div>
                            <div className="traver_time right font_14 color_grey">赞：<span>345</span></div>
                            <div className="traver_time right font_14 color_grey">评论：<span>98</span></div>
                        </div>
                        <div className="traver_travel width">
                            <div className="width font_18">没想到，你是这样的阿育吠陀</div>
                            <img className="traver_img left" src={img17}/>
                            <div className="traver_content left font_14 color_grey">岛上的治安很好。在肯尼亚的其他城市，我绝不敢拿着相机在街上招摇过市。但在拉穆岛，我却成天都背着相机，贪婪地猎取着从日出到日落的景观。拉穆岛历史悠久，很早就被列入世界遗产，据说郑和的船队就曾途经此地。岛上曾有繁荣的象牙和奴隶贸易。不过如今它却</div>
                            <div className="traver_traver left font_14 color_orange">佟丽娅</div>
                            <div className="traver_time left font_14 color_grey">2018.3.4</div>
                            <div className="traver_time right font_14 color_grey">赞：<span>345</span></div>
                            <div className="traver_time right font_14 color_grey">评论：<span>98</span></div>
                        </div>
                        <div className="traver_travel width">
                            <div className="width font_18">没想到，你是这样的阿育吠陀</div>
                            <img className="traver_img left" src={img17}/>
                            <div className="traver_content left font_14 color_grey">岛上的治安很好。在肯尼亚的其他城市，我绝不敢拿着相机在街上招摇过市。但在拉穆岛，我却成天都背着相机，贪婪地猎取着从日出到日落的景观。拉穆岛历史悠久，很早就被列入世界遗产，据说郑和的船队就曾途经此地。岛上曾有繁荣的象牙和奴隶贸易。不过如今它却</div>
                            <div className="traver_traver left font_14 color_orange">佟丽娅</div>
                            <div className="traver_time left font_14 color_grey">2018.3.4</div>
                            <div className="traver_time right font_14 color_grey">赞：<span>345</span></div>
                            <div className="traver_time right font_14 color_grey">评论：<span>98</span></div>
                        </div>
                        <div className="traver_pages width">
                            <span className="traver_page radius color_white background">上一页</span>
                            <span className="traver_allPage">112</span>
                            <span className="traver_page radius color_white background">下一页</span>
                            <span className="traver_allPage color_orange">共计:3</span>
                        </div>
                    </div>
                    <div className="traver_right left">
                        <img src={img1}/>
                        <div className="traver_name color_orange font_16">佟丽娅</div>
                        <div className="traver_name font_14 color_grey">佟丽娅，1984年8月8日出生于新疆伊犁，踏实、诚恳的演好每一个角色。</div>
                        <div className="traver_hot font_16">博主热门文章</div>
                        <div className="traver_name traver_hover font_14 color_orange">热门文章...</div>
                        <div className="traver_name traver_hover font_14 color_orange">热门文章...</div>
                        <div className="traver_name traver_hover font_14 color_orange">热门文章...</div>
                        <div className="traver_name traver_hover font_14 color_orange">热门文章...</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentTraver;