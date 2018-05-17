class Api::V1::ResourcesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Resource.all
  end

  # def show
  #   # render json: Company.find(params[:id])
  #   render json: { resource: Resource.find(params[:id])}
  #   # @company = Company.find(params[:id])
  # end

  def create
    resource = Resource.new(name: resource_params[:name], category_res: resource_params[:category_res], description: resource_params[:description], user_id: current_user.id)

    # binding.pry
    # if !current_user
    #   render json: { "errors": "You must be logged in"}
    # else
      if resource.save!
        flash[:notice] = "Resource added successfully!"
        render json: {resource: resource}
      else
        flash[:notice] = @resource.errors.full_messages.join(", ")
      end
    # end
  end

private

def resource_params
  params.require(:resource).permit(:name, :category_res, :description)
end

end
