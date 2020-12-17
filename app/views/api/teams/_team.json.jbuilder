json.team team, :id, :name
json.members do
    team.users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end