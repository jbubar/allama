class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true
end
