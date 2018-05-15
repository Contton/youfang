import React from 'react';

//点击返回顶部

class BackTop extends React.Component {

    // 渲染之后
    componentDidUpdate() {

        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const e = document.documentElement.scrollHeight || document.body.scrollHeight;

            const top_view = document.getElementById('top_view');

            if (top_view !== null && t >= 100 && e - t > 800) {
                top_view.style.display = 'block';
            }else if(top_view !== null){
                top_view.style.display = 'none';
            }
        };
    }

    // 返回顶部
    scrollToTop = () => {
        window.scrollTo(0, 1);
    };

    render() {
        return (
            <div
                id="top_view"
                onClick={this.scrollToTop}
                className="back-top">
                <span>TOP</span>
            </div>
        );
    }
}

export default BackTop;