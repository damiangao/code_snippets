var root = document.documentElement;

//测试浏览器属性支持
function testProperty(property) {
  if (property in root.style) {
    root.classList.add(property.toLowerCase());
    return true;
  }
  root.classList.add('no-' + property.toLowerCase());
  return false;
}
//测试某个属性的值是否支持
function testValue(id, value, property) {
  var dummy = document.createElement('p');
  dummy.style[property] = value;
  if (dummy.style[property]) {
    root.classList.add(id);
    return true;
  }
  root.classList.add('no-' + id);
  return false;
}