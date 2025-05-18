$(document).ready(function () {
  const $taskInput = $('#taskInput');
  const $addTaskBtn = $('#addTaskBtn');
  const $taskList = $('#taskList');
  const $modal = new bootstrap.Modal($('#taskModal'));
  const $modalText = $('#modalTaskText');

  $addTaskBtn.on('click', function () {
    const taskText = $taskInput.val().trim();

    if (taskText !== '') {
      const $li = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="taskText" style="cursor: pointer;">${taskText}</span>
          <button class="btn btn-sm btn-danger deleteBtn">Видалити</button>
        </li>
      `);

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
    const text = $(this).text();
    $modalText.text(text);
    $modal.show();
  });
});
