import React, { Component } from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import $ from 'jquery';

class ComponentPlace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hotPlace: [],
            placeUrl: "http://localhost:3000/hotPlace.json",
        };
    }
    getHotPlace(){
        $.ajax({
            url: this.state.travellerUrl,
            async: false,
            success: (comments) => {
                this.setState({hotPlace:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    componentWillMount(){
        this.getHotPlace();
    }
    hotSchool(){
        let schoolList = [];
        for(let i = 0; i < this.state.hotPlace.length; i++){
        }
    }
    render(){
        return(
            <div className="place_another">
                <div className="place_all">
                    <div className="place_title font_20">热门目的地</div>
                    <div className="place_place left">北京
                        <div className="place_some right">
                            <Link className="place_link" to="/home/hotPlace/beijing">北京大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">北京师范大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">中国人民大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">清华大学</Link>
                        </div>
                    </div>
                    <div className="place_place left">黑龙江
                         <div className="place_some right">
                             <Link className="place_link" to="/home/hotPlace/beijing">哈尔滨工业大学</Link>
                             <Link className="place_link" to="/home/hotPlace/beijing">哈尔滨工程大学</Link>
                         </div>
                    </div>
                    <div className="place_place left">吉林
                        <div className="place_some right">
                            <Link className="place_link" to="/home/hotPlace/beijing">吉林大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">东北师范大学</Link>
                        </div>
                    </div>
                    <div className="place_place left">辽宁
                        <div className="place_some right">
                            <Link className="place_link" to="/home/hotPlace/beijing">东北大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">大连理工大学</Link>
                        </div>
                    </div>
                    <div className="place_place left">山西
                        <div className="place_some right">
                            <Link className="place_link" to="/home/hotPlace/beijing">山西大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">太远理工大学</Link>
                        </div>
                    </div>
                    <div className="place_place left">山西
                        <div className="place_some right">
                            <Link className="place_link" to="/home/hotPlace/beijing">山西大学</Link>
                            <Link className="place_link" to="/home/hotPlace/beijing">太远理工大学</Link>
                        </div>
                    </div>
                    <Route path="/home/hotPlace/beijing" component={BeiJing}/>
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
                    <div className="place_name width font_16 color_orange">天安门</div>
                    <div className="place_content width font_14">天安门，坐落在中华人民共和国首都北京市的中心，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。</div>
                    <div className="right color_grey font_14 place_content">游记：<span>33</span></div>
                    <div className="place_strategy right color_grey font_14 place_content">攻略：<span>29</span></div>
                </div>
            </div>
        );
    }
}
export default ComponentPlace;