class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
    @projects = @team.projects
    render "api/teams/show"
  end
end
