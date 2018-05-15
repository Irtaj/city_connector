class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: :true, uniqueness: { case_sensitive: false }
  validates :username, presence: :true, uniqueness: { case_sensitive: false }

  belongs_to :company,
    optional: true
  has_many :resources
  has_many :messges
end
