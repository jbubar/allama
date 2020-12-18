export const createTask = (task) =>
  $.ajax({
    url: "/api/tasks",
    method: "POST",
    data: { task }
});
export const deleteTask = taskId =>
  $.ajax({
    url: `/api/tasks/${taskId}`,
    method: "DELETE"
});
export const updateTask = task =>
  $.ajax({
    url: `/api/tasks/${task.id}`,
    method: "PATCH",
    data: { task }
});

