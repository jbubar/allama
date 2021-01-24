export const selectTeamMembers = state => {
  return Object.values(state.entities.users);
};

export const selectUsersTasks = (state, userId) => {
  return Object.values(state.entities.tasks).filter(
    (task) => {
      return task.assigneeId == userId;
    }
  );
}

export const selectProjects = (state) => {
  return Object.values(state.entities.projects);
};

export const selectProjectTasks = (state, projectId) => {
  return Object.values(state.entities.tasks).filter(
    (task) => task.projectId == projectId
  );
};

export const selectProjectSections = (state, projectId) => {
  return Object.values(state.entities.sections).filter(
    (section) => section.projectId == projectId
  );
};