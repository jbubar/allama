json.team team, :id, :name
json.members do
    json.partial! 'api/users/users', users: @team.users
end