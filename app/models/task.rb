class Task < ApplicationRecord
    belongs_to :section
    belongs_to :assignee,
        foreign_key: :assignee_id,
        class_name: :User
    has_one :project,
        through: :section,
        source: :project

end
