// function getQueryStringArgs() {
//   //去掉开头的问号
//   var qs = (location.search.length > 0 ? location.search.substring(1) : "");

//   args = {};
//   //取得每一项
//   items = qs.length ? qs.split("&") : [];

//   item = null;
//   name = null;
//   value = null;
//   i = 0;
//   len = items.length;
//   //添加到args对象中
//   for (i = 0; i < len; i++) {
//     item = items[i].split("=");
//     name = decodeURIComponent(item[0]);
//     value = decodeURIComponent(item[1]);

//     if (name.length) {
//       args[name] = value;
//     }
//   }
//   return args;
// }

// 获取当前页面的url
// var url = window.location.href;

// 　　
// var url = self.location.href;

// 　　
// var url = document.URL;

// 　　
// var url = document.location;

//1.获取url的query部分

//String substring(start,stop) 

// let query = location.search.length > 0 ? location.search.substring(1) : "";
let url_search = "?sb=lyf&dsb=wy&lsb=yc";
let query = url_search.length ? url_search.substring(1) : "";
let q_arr = query.length ? query.split("&") : [];

let ans = {};

for (let i = 0; i < q_arr.length; i++) {
  let temp = q_arr[i].split("=");
  let key = decodeURIComponent(temp[0]);
  let value = decodeURIComponent(temp[1]);
  if (key.length) {
    ans[key] = value;
  }
}

console.log(ans);