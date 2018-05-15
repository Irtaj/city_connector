class Company < ApplicationRecord
  # acts_as_mappable

  validates :name, presence: true
  validates :description, presence: true
  validates :website, presence: true
  validates :category_comp, presence: true
  validates :address, presence: true

  has_many :users
  has_many :resources

  before_validation :geocode_address

  #before_validation
  #validation
  #after_validation
  #save
  private
  def geocode_new_address
    geo = Geokit::Geocoders::MultiGeocoder.geocode(address)
    errors.add(:address, "Could not Geocode address") if !geo.success
    self.lat, self.lng = geo.lat,geo.lng if geo.success
  end
  
  def geocode_address
    geocode_new_address if address_changed?
  end

  # def combined_address
  #   "#{address} #{city}, #{state} #{postal_code}"
  # end
end
