export const getProject = (projectId) =>
  $.ajax({
    url: `/api/projects/${projectId}`,
  });
export const createProject = (project) =>
  $.ajax({
    url: "/api/projects",
    method: "POST",
    data: { project },
  });
export const deleteProject = (projectId) =>
  $.ajax({
    url: `/api/projects/${projectId}`,
    method: "DELETE",
  });
export const updateProject = (project) =>
  $.ajax({
    url: `/api/projects/${project.id}`,
    method: "PATCH",
    data: { project },
  });