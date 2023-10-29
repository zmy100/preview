// 找对象，获取最上面的inputTodo
var inputTodo = document.getElementById("inputTodo");
// 任务列表, 从localStorage中获取数据
var todoData = JSON.parse(localStorage.getItem("todoData")) || [];

// input框添加点击回车键触发事件
inputTodo.onkeydown = function (e) {
  if (e.code === "Enter") {
    console.log("down");
  }
};

// input回车,触发表单提交事件
function postaction() {
  if (inputTodo.value !== "") {
    // 定义一个临时变量
    var tmpdict = {};
    // 使用时间戳作为id,并且把类型转换成字符串类型
    tmpdict["id"] = new Date().getTime() + "";
    tmpdict["isDone"] = false;
    tmpdict["todo"] = inputTodo.value;
    todoData.push(tmpdict);
    // 清空input
    inputTodo.value = "";
    // 展示数据
    showData();
  }
}

// 展示数据
function showData() {
  // 展示数据前，先把数据存储到localStorage中
  localStorage.setItem("todoData", JSON.stringify(todoData));
  // 把数据通过isDone进行分组
  var todoList = [];
  var doneList = [];
  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i]["isDone"]) {
      doneList.push(todoData[i]);
    } else {
      todoList.push(todoData[i]);
    }
  }
  // 更新右上角的计数
  document.getElementById("todoCount").innerHTML = todoList.length;
  document.getElementById("doneCount").innerHTML = doneList.length;
  // 展示数据
  var todoListHtml = "";
  var doneListHtml = "";
  // 遍历todoList数组
  for (var i = 0; i < todoList.length; i++) {
    let item = todoList[i];
    todoListHtml += ` <li id="li-${item.id}"> <input class="checkBox" type="checkbox" style="float: left" onchange="change('${item.id}',${item.isDone})" /><input class="content" type="text" style="float: left" id="${item.id}" value="${item.todo}" onchange="update('${item.id}')" /><span class="listSpan" style="float: right" onclick="remove('${item.id}')">-</span> </li> `;
  }
  // 遍历doneList数组
  for (var i = 0; i < doneList.length; i++) {
    let item = doneList[i];
    doneListHtml += ` <li id="li-${item.id}"> <input class="checkBox" type="checkbox" style="float: left" checked="checked" onchange="change('${item.id}',${item.isDone})" /><input class="content" type="text" style="float: left" id="${item.id}" value="${item.todo}" onchange="update('${item.id}')" /><span class="listSpan" style="float: right" onclick="remove('${item.id}')">-</span> </li> `;
  }
  // 把获取的值加到任务列表中
  document.getElementById("todoList").innerHTML = todoListHtml;
  document.getElementById("doneList").innerHTML = doneListHtml;
}

// 通过id，更新数据的isDone
function change(id, state) {
  // 遍历todoData数组
  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i]["id"] === id) {
      todoData[i]["isDone"] = !state;
    }
  }
  // 展示数据
  showData();
}

// 通过id，更新数据的todo
function update(id) {
  // 遍历todoData数组
  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i]["id"] === id) {
      todoData[i]["todo"] = document.getElementById(id).value;
    }
  }
  // 展示数据
  showData();
}

// 点击删除按钮，通过id删除数据
function remove(id) {
  // 遍历todoData数组
  for (var i = 0; i < todoData.length; i++) {
    if (todoData[i]["id"] === id) {
      todoData.splice(i, 1);
    }
  }
  // 展示数据
  showData();
}

// 点击清除按钮，清除所有数据
function clear() {
  // 清除所有数据
  todoData = [];
  // 展示数据
  showData();
}

// 展示数据
showData();
