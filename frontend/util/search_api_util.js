export const doSearch = (query, teamId) =>
  $.ajax({
    url: `/api/search/${query}`,
    method: "GET",
    data: { team_id: teamId },
  });
