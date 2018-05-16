class RemoveResourcesFromCompanies < ActiveRecord::Migration[5.2]
  def up
    remove_column :companies, :resource_needed
    remove_column :companies, :resource_surplus
    remove_column :companies, :urgent
  end

  def down
    add_column :companies, :resource_needed, :string
    add_column :companies, :resource_surplus, :string
    add_column :companies, :urgent, :boolean, default:false
  end
end
