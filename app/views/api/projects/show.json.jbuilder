json.partial! 'api/sections/sections', sections: @project.sections
json.partial! 'api/tasks/tasks', tasks: @project.tasks
json.partial! 'api/teams/team', team: @project.team