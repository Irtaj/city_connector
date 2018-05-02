class Resource < ApplicationRecord
  validates :name, presence: true
  validates :type, presence: true

  validates :expire_date, presence: true

  belongs_to :user
  belongs_to :company
end
