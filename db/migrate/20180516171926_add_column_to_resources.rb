class AddColumnToResources < ActiveRecord::Migration[5.2]
  def change
    add_column :resources, :description, :string
  end
end
