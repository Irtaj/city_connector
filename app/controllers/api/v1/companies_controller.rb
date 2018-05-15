class Api::V1::CompaniesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  include Geokit::Geocoders

  def index
    render json: Company.all
  end

  def show
    # render json: Company.find(params[:id])
    render json: { company: Company.find(params[:id])}
    # @company = Company.find(params[:id])
  end

  def create
    company = Company.new(name: company_params[:name], category_comp: company_params[:category_comp], description: company_params[:description], website: company_params[:website], address: company_params[:address], lat: company_params[:lat], lng: company_params[:lng])

    geo=MultiGeocoder.geocode(company_params[:address])
    new_attributes=company_params
    new_attributes[:lat]=geo.lat
    new_attributes[:lng]=geo.lng

    # binding.pry
    # if !current_user
    #   render json: { "errors": "You must be logged in"}
    # else
      if company.save!
        flash[:notice] = "Company added successfully"
        render json: {company: company}
      else
        flash[:notice] = @company.errors.full_messages.join(", ")
      end
    # end

  end

private

def company_params
  params.require(:company).permit(:name, :category_comp, :description, :website, :address, :lat, :lng)
end

end
