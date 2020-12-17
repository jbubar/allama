json.projects do
    json.partial! 'api/projects/projects', projects: @projects
end
json.sections do
    json.partial! 'api/sections/sections', sections: @projects.sections
end
json.tasks do
    json.partial! 'api/tasks/tasks', tasks: @projects.tasks
end