class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :users
    has_many :projects
    has_many :tasks, through: :projects
end
