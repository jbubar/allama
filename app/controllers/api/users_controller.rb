class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @team = @user.team
    render "api/users/show"
  end

  def create
    @user = User.new_with_team(user_params) ## add to users model with above logic
    if @user.save
      @team = @user.team
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :full_name, :team_name)
  end
end
