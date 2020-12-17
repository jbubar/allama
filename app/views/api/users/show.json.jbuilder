json.user do 
    json.partial! 'api/users/user', user: @user
end
# json.tasks..... @team.members @team.projects
json.projects json.partial! 'api/projects/projects', projects: @projects

json.partial! 'api/teams/team', team: @team

