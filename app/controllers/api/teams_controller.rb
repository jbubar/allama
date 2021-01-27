class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
    @projects = @team.projects
    @tasks = @team.tasks
    render "api/teams/show"
  end
end
