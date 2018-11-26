import {
  sourceData
} from '../data.js';

// 绘制柱状图
function histogram(data) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "350");

  // 绘制坐标轴
  var xAxial = document.createElementNS("http://www.w3.org/2000/svg", "line");
  var yAxial = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxial.setAttribute("x1", "0");
  xAxial.setAttribute("y1", "300");
  xAxial.setAttribute('x2', "400");
  xAxial.setAttribute("y2", "300");
  xAxial.setAttribute("style", "stroke:rgb(99, 99, 99); stroke-width:1");
  yAxial.setAttribute("x1", "0");
  yAxial.setAttribute("y1", "0");
  yAxial.setAttribute("x2", "0");
  yAxial.setAttribute("y2", "300");
  yAxial.setAttribute("style", "stroke:rgb(99, 99, 99); stroke-width:1");
  svg.appendChild(xAxial);
  svg.appendChild(yAxial);

  var dealedData = dealData(data);

  // 画出柱状图
  for (var i = 0; i < dealedData.length; i++) {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    rect.setAttribute('style', 'fill:#60ACFC');
    var x = 12 + i * 32;
    var y = 300 - dealedData[i];
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', "20");
    rect.setAttribute('height', dealedData[i]);
    svg.appendChild(rect);
  }

  var chartWrapper = document.querySelector('.chart-wrapper');
  chartWrapper.appendChild(svg);

}

// 处理数据
function dealData(data) {
  var max = Math.max.apply(null, data);
  var dealedData = [];
  // 当最大值大于纵坐标最大值，将data中所有值除以二
  if (max > 300) {
    dealedData = data.map((item) => {
      return item / 2;
    });
    dealData(dealedData);
  } else if (max < 150) {  // 当最大值小于纵坐标最大值的一半，将data中所有值乘2
    dealedData = data.map((item) => {
      return item * 2;
    });
    dealData(dealedData);
  } else {
    dealedData = data;
  }
  return dealedData;
}


console.log(sourceData)

histogram(sourceData[0].sale);