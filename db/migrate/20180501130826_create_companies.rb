class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :website, null: false
      t.string :category_comp, null: false

      t.string :address, null: false

      t.string :mn_phone
      t.string :mn_email

      t.boolean :verified, :default => false
      t.string :resource_needed
      t.string :resource_surplus
      t.boolean :urgent, :default => false

      t.datetime :remember_created_at
      t.timestamps null: false
    end
  end
end
