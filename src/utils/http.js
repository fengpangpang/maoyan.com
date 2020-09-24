const prefix = "http://www.pudge.wang:3002/api";

const http = {
  get: function(url, params) {
    //判断是否传参数
    if (params) {
      let arr = [];
      Object.keys(params).forEach((item, index) => {
        arr.push(item + "=" + params[item]);
      });

      url += "?" + arr.join("&");
    }
    return fetch(prefix + url).then((response) => response.json());
  },

  post: function(url, params) {
    let formData = new FormData();
    for (let key in params) {
      formData.append(key, params[key]);
    }
    return fetch(prefix + url, {
      method: "POST",
      body: formData,
    }).then((response) => response.json());
  },
};

export default http;
