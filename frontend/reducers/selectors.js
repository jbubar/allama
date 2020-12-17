export const selectTeamMembers = state => {
  return Object.values(state.entities.users);
};

export const selectUsersTasks = state => {
  return Object.values(state.entities.tasks).filter(task => task.assigneeId === state.session.currentUserId);
}

export const selectProjects = (state) => {
  return Object.values(state.entities.projects);
};