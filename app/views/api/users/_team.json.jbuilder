json.(team, :id, :name)
json.members do
    team.users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :full_name, :email, :team_id
        end
    end
end