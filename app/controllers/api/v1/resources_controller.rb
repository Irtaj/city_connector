class Api::V1::ResourcesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Resource.where(company_id: params[:id])
  end

  def create
    @resource = Resource.new(name: resource_params[:name], category_res: resource_params[:category_res], user_id: current_user.id)

    if @resource.save!
      flash[:notice] = "Resource request added successfully!"
      render json: @resource
    else
      render json: {"Your request for a resource did not save."}
    end
  end

  private

  def resource_params
    params.require(:resource).permit(:name, :category_res, :company_id)
  end

end
