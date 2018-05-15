class AddColumnsLocationToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :location, :string
    add_column :companies, :lat, :decimal, precision: 9, scale: 6
    add_column :companies, :lng, :decimal, precision: 9, scale: 6
  end
end
