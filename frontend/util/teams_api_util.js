export const getTeam = (teamId) => $.ajax({
    url: `/api/teams/${teamId}`
});