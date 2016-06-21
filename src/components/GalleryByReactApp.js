'use strict';

let React = require('react');

// CSS
require('normalize.css/normalize.css');
require('styles/main.css');

// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (let i = 0, j = imageDatasArr.length; i < j; i++) {
        let singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

/*
 * 获取区间内的一个随机值
 */
function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}


class GalleryByReactAppComponent extends React.Component{
  render(){
    return (
        <section className="stage">
            <section className="img-sec">
            1
            </section>
            <nav className="controller-nav">
            2
            </nav>
        </section>
    );
  }
};

module.exports = GalleryByReactAppComponent;
