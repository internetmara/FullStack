class Changetable < ActiveRecord::Migration[5.2]
  def change
    remove_column :dispensaries, :type
    add_column :dispensaries, :dispensary_type, :string, null: false
  end
end
