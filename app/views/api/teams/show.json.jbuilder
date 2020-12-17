json.partial! 'api/teams/team', team: @team
json.projects do
    json.partial! 'api/projects/projects', projects: @projects
end
