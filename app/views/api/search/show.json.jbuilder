json.users do
    json.partial! 'api/users/users', users: @users
end
json.partial! 'api/projects/projects', projects: @projects
json.partial! 'api/tasks/tasks', tasks: @tasks