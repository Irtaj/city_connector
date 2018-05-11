class Api::V1::UsersController < ApplicationController
  def show
    # render json: Company.find(params[:id])
    render json: { user: User.find(params[:id])}
    # @company = Company.find(params[:id])
  end

end
