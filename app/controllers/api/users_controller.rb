class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :full_name, :team_id)
  end
end
