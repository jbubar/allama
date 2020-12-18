export const getProject = (projectId) =>
  $.ajax({
    url: `/api/projects/${projectId}`,
  });
