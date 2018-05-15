class Api::V1::UsersController < ApplicationController
  def index
    render json: { user_id: current_user.id, handle: current_user.handle, icon_num: current_user.icon_num }
  end

  def show
    render json: { user: User.find(params[:id])}
  end

  private

  def company_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
