json.user do 
    json.partial! 'api/users/user', user: @user
end
# json.tasks..... @team.members @team.projects
json.projects do
    json.partial! 'api/projects/projects', projects: @projects
end
json.sections do
    json.partial! 'api/sections/sections', sections: @projects.sections
end
json.tasks do
    json.partial! 'api/tasks/tasks', tasks: @user.tasks
end

json.partial! 'api/teams/team', team: @team

