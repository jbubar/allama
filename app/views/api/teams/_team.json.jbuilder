json.team team, :id, :name
json.partial! 'api/users/users', users: team.users