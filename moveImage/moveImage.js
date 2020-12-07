var x = "";
var y = "";
var endX = 0,
  endY = 0;
var distanceX = 0,
  distanceY = 0;

window.onload = function () {
  MoveImg();
}

function MoveImg() {
  var ele = document.getElementById("bg");
  ele.addEventListener("touchmove", function (event) {
    GetMouse(event);
  });

  ele.addEventListener("touchstart", function (event) {
    // 获取手指点击图片的坐标相对于图片左上角顶点坐标的距离
    distanceX = event.touches[0].clientX - endX;
    distanceY = event.touches[0].clientY - endY;
    GetMouse(event);
  });
  ele.addEventListener("touchend", function (event) {
    GetMouse(event);
  });
}
function GetMouse(oEvent) {
  // 跟随鼠标移动位置
  x = oEvent.changedTouches[0].clientX;
  y = oEvent.changedTouches[0].clientY;

  document.getElementById("bg").style.left = parseFloat(x) - distanceX + "px";
  document.getElementById("bg").style.top = y - distanceY + "px";

  endX = parseFloat(x) - distanceX;
  endY = y - distanceY;
}
