class AddColumnCompanyidToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_id, :string, null: false, unique: true
  end
end
