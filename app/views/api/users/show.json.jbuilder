json.user do 
    json.partial! 'api/users/user', user: @user
end
# json.tasks..... @team.members @team.projects
json.team do
    json.partial! 'api/users/team', team: @team
end
