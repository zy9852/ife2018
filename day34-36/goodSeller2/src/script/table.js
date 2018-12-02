import { sourceData } from './data.js';

var regionWrapper = document.querySelector('#region-select-wrapper');
var productWrapper = document.querySelector('#product-select-wrapper');

// 获取数据
function getData() {
  var region_checkboxs = regionWrapper.querySelectorAll('input');
  var product_checkboxs = productWrapper.querySelectorAll('input');
  var regionData = [];
  var result = [];
  for (var i = 0; i < region_checkboxs.length - 1; i++) {
    if (region_checkboxs[i].checked === true) {
      for (var j = 0; j < sourceData.length; j++) {
        if (sourceData[j].region === region_checkboxs[i].value) {
          regionData.push(sourceData[j]);
        }
      }
    }
  }
  for (var k = 0; k < product_checkboxs.length - 1; k++) {
    if (product_checkboxs[k].checked === true) {
      for (var m = 0; m < regionData.length; m++) {
        if (regionData[m].product === product_checkboxs[k].value) {
          result.push(regionData[m]);
        }
      }
    }
  }
  return result;
}

// 渲染表格
function renderTable(data) {
  var tableWrapper = document.querySelector('.table-wrapper');
  if (data.length > 0) {
    var table = document.createElement('table');

    // 表头
    var tr = document.createElement('tr');
    tr.innerHTML =
      `<th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>`;
    table.appendChild(tr);

    // 传入数据
    for (var i = 0; i < data.length; i++) {
      var data_tr = document.createElement('tr');
      for (var j in data[i]) {
        // 商品、地区
        if (!Array.isArray(data[i][j])) {
          var td1 = document.createElement('td');
          td1.innerHTML = data[i][j];
          data_tr.appendChild(td1);
        } else { // 销量
          for (var k = 0; k < data[i][j].length; k++) {
            var td2 = document.createElement('td');
            td2.innerHTML = data[i][j][k];
            data_tr.appendChild(td2);
          }
        }
      }
      table.appendChild(data_tr);
    }
    tableWrapper.appendChild(table);
    changeTd();
    mergeCell();
  }
}

// 交换商品、地区两列
function changeTd() {
  var region_checked = regionWrapper.querySelectorAll("input:checked");
  var product_checked = productWrapper.querySelectorAll("input:checked");
  var tb = document.querySelector('table');
  if (region_checked.length === 1 && product_checked.length > 1) {
    for (var i = 0; i < tb.rows.length; i++) {
      var temp = tb.rows[i].cells[0].innerHTML;
      tb.rows[i].cells[0].innerHTML = tb.rows[i].cells[1].innerHTML;
      tb.rows[i].cells[1].innerHTML = temp;
    }
  }
}

// 合并单元格
function mergeCell() {
  var tab = document.querySelector('table');
  for (var i = 1; i < tab.rows.length - 1; i++) {
    for (var j = i + 1; j < tab.rows.length; j++) {
      if (tab.rows[i].cells[0].innerHTML === tab.rows[j].cells[0].innerHTML) {
        tab.rows[j].cells[0].style.display = "none";
        tab.rows[i].cells[0].rowSpan += 1;
      }
    }
  }
}

export {
  getData,
  renderTable,
  regionWrapper,
  productWrapper
}