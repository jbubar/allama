json.extract! task, :id, :title, :description, :due_date, :section_id, :assignee_id, :completed
json.project_id task.project.id