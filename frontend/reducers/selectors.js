export const selectTeamMembers = state => {
  return Object.values(state.entities.team.members);
};
