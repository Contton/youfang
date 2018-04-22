import React, { Component } from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';

class ComponentPlace extends React.Component{
    render(){
        return(
            <div className="place_another">
            <div className="place_all">
                <div className="place_title font_20">热门目的地</div>
                <div className="place_place left">北京
                    <Link className="place_link" to="/home/2/beijing">北京大学</Link>
                    <Link className="place_link" to="/home/2/beijing">北京邮电大学</Link>
                    <Link className="place_link" to="/home/2/beijing">中国人民大学</Link>
                    <Link className="place_link" to="/home/2/beijing">清华大学</Link>
                </div>
                <div className="place_place left">西安
                    <Link className="place_link" to="/home/2/beijing">西安交通大学</Link>
                    <Link className="place_link" to="/home/2/beijing">西安邮电大学</Link>
                    <Link className="place_link" to="/home/2/beijing">西北大学</Link>
                </div>
                <div className="place_place left">成都
                    <Link className="place_link" to="/home/2/beijing">四川大学</Link>
                    <Link className="place_link" to="/home/2/beijing">电子科技大学</Link>
                    <Link className="place_link" to="/home/2/beijing">西南政法大学</Link>
                </div>
                <div className="place_place left">重庆
                    <Link className="place_link" to="/home/2/beijing">重庆大学</Link>
                    <Link className="place_link" to="/home/2/beijing">重庆交通大学</Link>
                    <Link className="place_link" to="/home/2/beijing">西南大学</Link>
                    <Link className="place_link" to="/home/2/beijing">重庆邮电大学</Link>
                </div>
                <Route path="/home/2/beijing" component={BeiJing}/>
            </div>
            </div>
        );
    }
}
class BeiJing extends React.Component{
    render(){
        return(
            <div className="place_one width left">
                <div className="place_every radius">
                    <div className="place_name width font_20 color_orange">天安门</div>
                    <div className="place_content width">天安门，坐落在中华人民共和国首都北京市的中心，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。</div>
                </div>
            </div>
        );
    }
}
export default ComponentPlace;