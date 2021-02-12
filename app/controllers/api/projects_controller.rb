class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.where(team_id: params[:team_id])
    render "api/projects/index"
  end

  def show
    @project = Project.find(params[:id])
    render "api/projects/contains"
  end
  
  def create
    name = params[:project][:name]
    owner_id = params[:project][:owner_id]
    team_id = User.find(owner_id).team_id
    @project = Project.new({name: name, owner_id: owner_id, team_id: team_id})
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
end
