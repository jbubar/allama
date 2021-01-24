json.partial! 'api/teams/team', team: @team
json.partial! 'api/projects/projects', projects: @projects
json.partial! 'api/tasks/tasks', tasks: @team.tasks