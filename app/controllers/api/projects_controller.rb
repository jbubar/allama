class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.where(team_id: params[:team_id])
    render "api/projects/index"
  end

  def show
    @project = Project.find(params[:id])
    render "api/projects/show"
  end
  
  def create
    @project = Project.new(project_params)
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render 'api/projects/show'
  end
  
  private
  def project_params
    params.require(:project).permit(:name, :description, :due_date, :owner)
  end
end
