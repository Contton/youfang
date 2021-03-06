const HOST = "http://localhost:8080"; //主机地址

export const LOGIN_URL = HOST + "/login";   //登录
export const REGIST_URL = HOST + "/regist";   //注册
export const SENDMESSAGE_URL = HOST + "/sendMessage/";   //注册
export const HOT_TRAVEL_URL = HOST + "/hot/getHotTraverArticle";    //主页热门游记
export const ONE_TRAVEL_URL = HOST + "/traverArticle/article/"; //具体游记
export const TRAVEL_DO_PRAISE = HOST + "/traverArticle/doPraise/";  //游记点赞
export const GET_COMMENT_BY_ARTICLEID = HOST + "/comments/";    //通过游记ID得到文章
export const ADD_COMMENT = HOST + "/addComment";    //添加评论
export const USER_TRAVER = HOST + "/traverArticle/user/";   //用户所有游记
export const WRITE_TRAVER = HOST + "/traverArticle/addTraverArticle";   //写游记
export const EDIT_IMAGE_UPLOAD = HOST + "/upload";  //富文本编辑器图片上传

export const GET_FANS_URL = HOST + "/getFansListById"; //获取粉丝列表
export const GET_WATCH_URL = HOST + "/getWatchListById"; //获取关注列表
export const DO_WATCH = HOST + "/addWatch/"

export const ADD_STRATEGY = HOST + "/addStrategy"; //添加攻略
export const ADD_STRATEGY_COMMENT = HOST + "/addStrategyComment";    //添加评论
export const USER_STRATEGY = HOST+ "/strategyByUserId/"; //攻略列表
export const ONE_STRATEGY = HOST + "/strategy/"; //具体攻略
export const STRATEGY_DO_PRAISE = "/doStrategyPraise/"; //攻略点赞
export const GET_STRATEGY_COMMENT_BY_ARTICLEID = HOST + "/strategyComments/";    //通过游记ID得到文章

export const HOT_TRAVELLER__URL = HOST + "/json/traveller.json";   //主页热门博主
export const HOT_STRATEGY_URL = HOST + "/json/strategy.json";  //主页热门攻略
export const HOT_PLACE_URL = HOST + "/json/place.json";    //主页热门旅游地
export const FIND_STRATEGY_URL = HOST + "/json/list.json"; //搜索攻略

export const SEARCH = HOST + "/search"; //搜索游记攻略
export const SEARCHSTRATEGY = HOST + "/searchStrategy"; //搜索游记
export const SEARCHTRAVER = HOST + "/searchTraver"; //搜索游记
export const UPDATE_HEADERIMAGE_URL= HOST + "/updateHeaderImage/";