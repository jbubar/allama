json.user do
    json.partial! 'api/users/user', user: @user
end
json.partial! 'api/teams/team', team: @team
json.partial! 'api/projects/projects', projects: @projects
json.partial! 'api/tasks/tasks', tasks: @user.tasks

