class Api::SearchController < ApplicationController
    def index 
        @projects = Project
                    .where(team_id: params[:team_id])
                    .where(
                        "LOWER(name) LIKE ? OR LOWER(description) LIKE ?", 
                        "%#{params[:query].downcase}%", 
                        "%#{params[:query].downcase}%"
                    )
        @users = User
                    .where(team_id: params[:team_id])
                    .where(
                        "LOWER(full_name) LIKE ? OR LOWER(email) LIKE ?", 
                        "%#{params[:query].downcase}%", 
                        "%#{params[:query].downcase}%"
                    )
        @tasks = Task
                    .joins("JOIN sections ON sections.id = tasks.section_id")
                    .joins("JOIN projects ON projects.id = sections.project_id")
                    .where(projects: { team_id: params[:team_id] })
                    .where(
                        "LOWER(tasks.title) LIKE ? OR LOWER(tasks.description) LIKE ?", 
                        "%#{params[:query].downcase}%", 
                        "%#{params[:query].downcase}%"
                    )
        render "api/search/show"
    end
end