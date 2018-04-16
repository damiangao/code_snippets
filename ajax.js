function createXHR() {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
        i, len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex) {
          //跳过
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error("No XHR object available.");
  }
}

var xhr = createXHR();


//同步请求
// xhr.open("get", "example.txt", false);
// xhr.send(null);

// if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//   alert(xhr.responseText);
// } else {
//   alert("Request was unsuccessful:" + xhr.status);
// }

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText);
    } else {
      alert("Request was unsuccessful:" + xhr.status);
    }
  }
}

xhr.open("get", "example.txt", true);
//设置http请求头
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null);

//接收http请求头
// var myHeader = xhr.getResponseHeader("MyHeader");
// var allHeaders = xhr.getAllResponseHeaders();


//add GET url param
function addURLParam(url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}