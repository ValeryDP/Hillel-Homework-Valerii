"use strict";

$(document).ready(function () {
  var $taskInput = $('#taskInput');
  var $addTaskBtn = $('#addTaskBtn');
  var $taskList = $('#taskList');
  var $modal = new bootstrap.Modal($('#taskModal'));
  var $modalText = $('#modalTaskText');
  $addTaskBtn.on('click', function () {
    var taskText = $taskInput.val().trim();
    if (taskText !== '') {
      var $li = $("\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <span class=\"taskText\" style=\"cursor: pointer;\">".concat(taskText, "</span>\n          <button class=\"btn btn-sm btn-danger deleteBtn\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n        </li>\n      "));
      $taskList.append($li);
      $taskInput.val('');
    } else {
      alert('Введіть текст завдання!');
    }
  });
  $taskList.on('click', '.deleteBtn', function () {
    $(this).closest('li').remove();
  });
  $taskList.on('click', '.taskText', function () {
    var text = $(this).text();
    $modalText.text(text);
    $modal.show();
  });
});