//用于管理所有的接口信息

import http from "./http";

//最受欢迎的接口
export function getTopRated(params) {
  return http.get("/home/topRatedMovies", params);
}

// 首页的列表接口
export function getIndexList(params) {
  return http.post("/home/movieOnInfoList", params);
}

// 首页的上拉加载列表的接口
export function pullUpLoadList(params) {
  return http.post("/home/moreComingList", params);
}

//影片详情页
export function detailList(params) {
  return http.get("/detail/info", params);
}

//城市列表接口
export function getcityList(params) {
  return http.get("/cities/list", params);
}
