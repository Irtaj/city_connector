class RemoveExpireDateFromResources < ActiveRecord::Migration[5.2]
  def up
    remove_column :resources, :expire_date
  end

  def down
    add_column :resources, :expire_date, :datetime
  end
end
