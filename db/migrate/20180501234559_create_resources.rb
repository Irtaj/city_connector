class CreateResources < ActiveRecord::Migration[5.2]
  def change
    create_table :resources do |t|
      t.string :name, null: false
      t.string :category_res, null: false

      t.boolean :needed
      t.datetime :expire_date
      t.boolean :urgent, :default => false

      t.belongs_to :user
      t.belongs_to :company

      t.timestamps null: false
    end
  end
end
