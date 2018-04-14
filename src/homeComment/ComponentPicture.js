import React from 'react';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import classNames from 'classnames/bind';
import styles from '../css/pictureCss.css';

let style = classNames.bind(styles);

class CommentPicture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0,
        }
    }
    componentWillMount(){
        this.time = setInterval(
            () => {
                let next_index = ((this.state.index + 1)%4);
                this.setState({index:next_index});
            },
            5000
        );
    }
    clickLast(){
        let index = this.state.index;
        console.log(index);
        if(index === 0){
            this.setState({index:3});
        }else{
            this.setState({index:index-1});
        }
    }
    clickNext(){
        let index = this.state.index;
        console.log(index);
        if(index === 3){
            this.setState({index:0});
        }else{
            this.setState({index:index+1});
        }
    }
    componentWillUnmount(){
        clearInterval(this.time);
    }
    render(){
        let show = style({
            show: true,
            sliderAction: true
        });
        let hidden = style({
            hidden: true,
            sliderAction: true
        })
        return(
            <div id="container">
                <ul className="picture_img">
                    <li className={this.state.index === 0 ? show : hidden}><img src={img9}/></li>
                    <li className={this.state.index === 1 ? show : hidden}><img src={img10}/></li>
                    <li className={this.state.index === 2 ? show : hidden}><img src={img11}/></li>
                    <li className={this.state.index === 3 ? show : hidden}><img src={img12}/></li>
                </ul>
                <div className="picture_find radius">
                    <input className="picture_input radius font_18" type="text" placeholder="搜索城市，大学，游记，攻略等"/><input value="搜索" className="picture_button radius font_18 color_white background" type="button"/>
                </div>
                <div id="prev" class="arrow" onClick={this.clickLast.bind(this)}>&lt;</div>
                <div id="next" class="arrow" onClick={this.clickNext.bind(this)}>&gt;</div>
            </div>
        );
    }
}

export default CommentPicture;