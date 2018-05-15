class AddColumnsUserInfoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :title, :string

    add_column :users, :admin, :boolean, :default => false
    add_column :users, :username, :string
    add_index :users, :username, unique: true
  end
end
