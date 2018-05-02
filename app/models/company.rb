class Company < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :website, presence: true
  validates :type, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :zip, presence: true

  has_many :users
  has_many :resources
end
