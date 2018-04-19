/*
some useful functions about DOM 一些DOM中常用的函数
*/

//get position of element 获取元素页面位置

function getElementLeft(element) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null) {

    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

function getBoundingClientRect(element) {
  var scrollTop = document.documentElement.scrollTop;
  var scrollLeft = document.documentElement.scrollLeft;

  if (element.getBoundingClientRect) {
    if (typeof arguments.callee.offset != "number") {
      var temp = document.createElement("div");
      temp.style.cssText = "position:absolute;left:0;top:0;";
      document.body.appendChild(temp);
      arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
      document.body.removeChild(temp);
      temp = null;
    }

    var rect = element.getBoundingClientRect();
    var offset = arguments.callee.offset;

    return {
      left: rect.left + offset,
      right: rect.right + offset,
      top: rect.top + offset,
      bottom: rect.bottom + offset
    };
  } else {
    var actualLeft = getElementLeft(element);
    var actualTop = getElementTop(element);

    return {
      left: actualLeft - scrollLeft,
      right: actualLeft + element.offsetwidth - scrollLeft,
      top: actualTop - scrollTop,
      bottom: actualTop + element.offsetHeight - scrollTop
    }
  }
}

//get viewport of browser 获取浏览器视窗大小

function getViewport() {
  if (document.compatMode == "BackCompat") {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
}

//elements traversal 遍历元素

//TreeWalker

var root = document.getElementById("main");
var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, nul, false);

var node = walker.firstChild();
while (node != null) {
  alert(node.tagName);
  node = walker.nextNode();
}

//跨浏览器通用事件处理程序
var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};