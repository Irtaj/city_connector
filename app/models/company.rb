class Company < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :website, presence: true
  validates :category_comp, presence: true
  validates :address, presence: true

  has_many :users
  has_many :resources
end
