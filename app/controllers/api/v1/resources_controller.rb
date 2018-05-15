class Api::V1::ResourcesController < ApplicationController
  skip_before_action :verify_authenticity_token

def create
  resources = Resource.new(resource_params)

  if current_user
    resource.review = current_user
  else
    resource.user_id = 1
  end

  if resource.save
    render json: Resource.all
  else
    render json: {"Your request for a resource did not save."}
  end

  def review_params
    params.require(:review).permit(:resource, :company_id)
  end

end
