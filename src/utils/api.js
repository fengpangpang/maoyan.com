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
