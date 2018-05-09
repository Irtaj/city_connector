class Api::V1::CompaniesController < ApplicationController
  def index
    render json: Company.all
  end

  def show
    # render json: Company.find(params[:id])
    render json: { company: Company.find(params[:id])}
    # @company = Company.find(params[:id])
  end
end
