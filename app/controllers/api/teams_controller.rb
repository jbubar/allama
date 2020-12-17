class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
    render "api/teams/show"
  end
end
