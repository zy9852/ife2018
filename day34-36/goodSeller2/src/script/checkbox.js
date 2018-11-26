 // 生成checkbox
 function createCheckbox(wrapper, data) {
   var content = '';
   for (var i in data) {
     content += '<label><input class="child" type="checkbox" value="' + data[i] + '" >' + data[i] + '</label>';
   }
   content += '<label><input class="all" type="checkbox" value="全选">全选</label>';
   wrapper.innerHTML = content;

   // 全选 单选 逻辑处理函数
   wrapper.onclick = function (e) {
     if (e.target.type === "checkbox") {
       var checkboxs = wrapper.querySelectorAll('input');
       if (e.target.className === "all") {
         for (var i = 0; i < checkboxs.length; i++) {
           checkboxs[i].checked = true;
         }
       } else if (e.target.className === "child") {
         var checkedNum = 0;
         for (var i = 0; i < checkboxs.length - 1; i++) {
           if (checkboxs[i].checked === true) {
             checkedNum++;
           }
         }
         if (checkedNum === 0) {
           e.target.checked = true;
         } else if (checkedNum === 3) {
           checkboxs[checkboxs.length - 1].checked = true;
         } else {
           checkboxs[checkboxs.length - 1].checked = false;
         }
       }
     }
   }
 }

 export { createCheckbox }