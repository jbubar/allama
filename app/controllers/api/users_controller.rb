class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def create
    # team_name = params[:user][:team_name] ##This is just a brainstorm of what the code will eventually look like.
    # team = Team.find_by(name: team_name)
    # team = Team.new(name: team_name) unless team
    # user_params[:team_id] = team.id
    
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :full_name, :team_id)
  end
end
