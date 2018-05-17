class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def index
    render json: { user_id: current_user.id, username: current_user.username}
  end

  def show
    render json: { user: User.find(params[:id])}
  end

  private

  def company_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end

end
