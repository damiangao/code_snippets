function getQueryStringArgs() {
  //去掉开头的问号
  var qs = (location.search.length > 0 ? location.search.substring(1) : "");

  args = {};
  //取得每一项
  items = qs.length ? qs.split("&") : [];

  item = null;
  name = null;
  value = null;
  i = 0;
  len = items.length;
  //添加到args对象中
  for (i = 0; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}