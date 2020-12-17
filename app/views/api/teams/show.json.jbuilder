json.partial! 'api/teams/team', team: @team
json.projects do
    json.partial! 'api/projects/projects', projects: @projects
end
json.sections do
    json.partial! 'api/sections/sections', sections: @projects.sections
end
json.tasks do
    json.partial! 'api/tasks/tasks', tasks: current_user.tasks
end