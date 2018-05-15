'use strict'
import React from 'react';
import $ from 'jquery';
import { HOT_TRAVEL_URL, HOT_TRAVELLER__URL, HOT_STRATEGY_URL, HOT_PLACE_URL } from "../API";

class Traveller extends React.Component{
    openTraver(){
        this.props.push('/traverPage/1');
    }
    render(){
        return(
            <div onClick={this.openTraver.bind(this)} className="traveller_all left width font_14">
                <img src={this.props.traveller.picture}/>
                <div className="traveller_name font18 color_orange">{this.props.traveller.name}</div>
                <div className="traveller_intro color_grey">{this.props.traveller.autograph}</div>
            </div>
        );
    }
}
class Strategy extends React.Component{
    render(){
            return(
                <div className="strategy_one left width">
                    <img src={this.props.strategy.picture}/>
                    <div className="traveller_name font18 color_orange">{this.props.strategy.name}</div>
                    <div className="traveller_intro color_grey">{this.props.strategy.introduce}</div>
                </div>
            )
    }
}
class Place extends React.Component{
    render(){
        return(
            <div className="content_place left font_14">
                <img src={this.props.place.picture}/>
                <div className="traveller_name font18 color_orange">{this.props.place.name}</div>
                <div className="traveller_intro color_grey">{this.props.place.introduce}</div>
            </div>
        );
    }
}
class Article extends React.Component{
    render(){
        let id = '/ArticlePage/' + this.props.article.traverArticleId;
        return(
            <div className="travels_one width font_14" onClick={()=>{this.props.push(id)}}>
                <div className="one_picture left height"><img src={this.props.article.coverImageUrl}/></div>
                <div className="one_title font_18 left color_orange">{this.props.article.title}</div>
                <div className="one_content color_grey left">{this.props.article.introduction}</div>
                <div className="one_traveller left">
                    <div className="one_info left height">{this.props.article.university.universityName}</div>
                    <div className="one_info left height writer">{this.props.article.author.nickName}</div>
                    <button className="one_button color_white radius left height background">点赞</button>
                </div>
            </div>
        );
    }
}

class CommentContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseOut:false,
            traveller:[],
            strategy:[],
            place:[],
            article:[],
        };
    }
    componentWillMount(){
        this.getTraveller();
        this.getStrategy();
        this.getPlace();
        //this.getArticle();
    }
    componentDidMount(){
        this.getArticle();
    }
    getTraveller(){
        $.ajax({
            url: HOT_TRAVELLER__URL,
            async: false,
            success: (comments) => {
                this.setState({traveller:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    getStrategy(){
        $.ajax({
            url: HOT_STRATEGY_URL,
            async: false,
            success: (comments) => {
                this.setState({strategy:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    getPlace(){
        $.ajax({
            url: HOT_PLACE_URL,
            async: false,
            success: (comments) => {
                this.setState({place:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
    getArticle(){
        $.ajax({
            url: HOT_TRAVEL_URL,
            async: false,
            success: (comments) => {
                this.setState({article:comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }

    renderTraverArticle(){

        let list = [];
        for(let i = 0;i < this.state.article.length;i++){
            list.push(<Article push={this.props.push} article={this.state.article[i]}/>);
        }
        return list;
    }

    render(){
        return(
            <div className="content">
                <div className="content_all">
                    <div className="content_left left">
                        <div className="content_traveller width">
                            <div className="traveller_title font_16 left">热门博主</div>
                            <div className="traveller_more color_grey left">更多博主</div>
                            <Traveller push={this.props.push} traveller={this.state.traveller}/>
                        </div>
                        <div className="content_strategy width">
                            <div className="strategy_title font_16 left">旅游攻略推荐</div>
                            <div className="strategy_more color_grey left">更多攻略</div>
                            <Strategy strategy={this.state.strategy[0]}/>
                            <Strategy strategy={this.state.strategy[1]}/>
                        </div>
                    </div>
                    <div className="content_right left height">
                        <div className="content_popular width">
                            <div className="popular_title font_16 left">热门景点</div>
                            <div className="popular_more color_grey left">更多景点</div>
                            <div className="content_places left height width">
                                <Place place={this.state.place[0]}/>
                                <Place place={this.state.place[1]}/>
                                <Place place={this.state.place[2]}/>
                            </div>
                        </div>
                        <div className="content_travels width">
                        <div className="travels_title font_16 left">热门游记</div>
                        <div className="travels_more color_grey right">更多游记</div>
                        <div className="travels_all left">
                            {this.renderTraverArticle()}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentContent;