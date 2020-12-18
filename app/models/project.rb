class Project < ApplicationRecord
    validates :name, :owner_id, :team_id, presence: true

    belongs_to :team
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
    has_many :sections, dependent: :destroy
    has_many :tasks,
        through: :sections,
        source: :tasks

end
