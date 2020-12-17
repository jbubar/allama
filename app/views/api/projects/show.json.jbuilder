json.partial! 'api/projects/projects', projects: @projects
json.partial! 'api/sections/sections', sections: @projects.sections
json.partial! 'api/tasks/tasks', tasks: @projects.tasks