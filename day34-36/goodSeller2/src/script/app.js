 import {
   createCheckbox
 } from './checkbox.js';
 import {
   checkboxList
 } from './data.js';
 import {
   getData,
   renderTable,
   regionWrapper,
   productWrapper
 } from './table.js';
require ('../css/style.css');

 var selectWrapper = document.querySelector('.select-wrapper');
 var tableWrapper = document.querySelector('.table-wrapper');

 // 调用函数在页面生成两组checkbox
 createCheckbox(regionWrapper, checkboxList.region);
 createCheckbox(productWrapper, checkboxList.product);

 // 复选框改变，更新表格
 selectWrapper.onchange = function () {
   // 删除已存在的表
   if (tableWrapper.hasChildNodes() == true) {
     tableWrapper.removeChild(tableWrapper.childNodes[0]);
   }
   var result = getData();
   renderTable(result);
 }